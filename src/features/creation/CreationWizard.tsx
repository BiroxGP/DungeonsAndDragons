import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { StepBar } from '../../components/StepBar'
import { Button } from '../../components/Button'
import { createCharacter, type Character } from '../../types/character'
import { useCharacterStore } from '../../store/characterStore'
import { WIZARD_STEP_IDS, useWizardValidity, type EquipmentSelections } from './wizardSteps'
import { getClass } from '../../data/classes'
import { getBackground } from '../../data/backgrounds'
import { RaceStep } from './steps/RaceStep'
import { ClassStep } from './steps/ClassStep'
import { BackgroundStep } from './steps/BackgroundStep'
import { AbilitiesStep } from './steps/AbilitiesStep'
import { SkillsStep } from './steps/SkillsStep'
import { SpellsStep } from './steps/SpellsStep'
import { EquipmentStep } from './steps/EquipmentStep'
import { DetailsStep } from './steps/DetailsStep'
import { ReviewStep } from './steps/ReviewStep'

interface CreationWizardProps {
  onFinished: (characterId: string) => void
}

export function CreationWizard({ onFinished }: CreationWizardProps) {
  const { t, i18n } = useTranslation()
  const saveCharacter = useCharacterStore((state) => state.saveCharacter)
  const [draft, setDraft] = useState<Character>(() => createCharacter())
  const [stepIndex, setStepIndex] = useState(0)
  const [equipmentSelections, setEquipmentSelections] = useState<EquipmentSelections>({})

  const patch = (p: Partial<Character>) => setDraft((prev) => ({ ...prev, ...p }))
  const { invalid, invalidList } = useWizardValidity(draft, equipmentSelections)

  // A different class has different equipment choice groups, so previous selections no longer apply.
  useEffect(() => {
    setEquipmentSelections({})
  }, [draft.classId])

  const stepLabels = WIZARD_STEP_IDS.map((id) => t(`wizard.steps.${id}`))
  const currentStepId = WIZARD_STEP_IDS[stepIndex]
  const currentStepInvalid = invalidList[stepIndex]

  const goNext = () => setStepIndex((i) => Math.min(WIZARD_STEP_IDS.length - 1, i + 1))
  const goBack = () => setStepIndex((i) => Math.max(0, i - 1))

  const handleFinish = (maxHp: number) => {
    const cls = getClass(draft.classId)
    const background = getBackground(draft.backgroundId)

    const skills = { ...draft.skills }
    background?.skillProficiencies.forEach((skill) => {
      if (!skills[skill]?.proficient) skills[skill] = { proficient: true, expertise: false }
    })

    const equipmentItemIds = (cls?.startingEquipment ?? []).flatMap((group, groupIndex) => {
      const optionIndex = equipmentSelections[groupIndex]
      return group.options[optionIndex]?.itemIds ?? []
    })
    const equipmentLines = (cls?.startingEquipment ?? []).map((group, groupIndex) => {
      const option = group.options[equipmentSelections[groupIndex]]
      const label = option?.label
      return label ? (i18n.language === 'it' ? label.it ?? label.en : label.en) : ''
    })
    const backgroundLine = background ? (i18n.language === 'it' ? background.equipment.it ?? background.equipment.en : background.equipment.en) : ''
    const inventory = [...equipmentLines, backgroundLine].filter(Boolean).join('\n')

    const finalCharacter: Character = {
      ...draft,
      skills,
      maxHp,
      currentHp: maxHp,
      equipmentItemIds,
      inventory,
    }
    saveCharacter(finalCharacter)
    onFinished(finalCharacter.id)
  }

  return (
    <div className="flex flex-col flex-1">
      <StepBar labels={stepLabels} currentStep={stepIndex} invalidSteps={invalidList} onStepClick={setStepIndex} />

      <div className="flex-1 px-6 py-6 max-w-3xl mx-auto w-full">
        {currentStepId === 'race' && <RaceStep draft={draft} patch={patch} />}
        {currentStepId === 'class' && <ClassStep draft={draft} patch={patch} />}
        {currentStepId === 'background' && <BackgroundStep draft={draft} patch={patch} />}
        {currentStepId === 'abilities' && <AbilitiesStep draft={draft} patch={patch} />}
        {currentStepId === 'skills' && <SkillsStep draft={draft} patch={patch} />}
        {currentStepId === 'spells' && <SpellsStep draft={draft} patch={patch} />}
        {currentStepId === 'equipment' && (
          <EquipmentStep
            draft={draft}
            selections={equipmentSelections}
            onSelect={(groupIndex, optionIndex) => setEquipmentSelections((prev) => ({ ...prev, [groupIndex]: optionIndex }))}
          />
        )}
        {currentStepId === 'details' && <DetailsStep draft={draft} patch={patch} />}
        {currentStepId === 'review' && <ReviewStep draft={draft} onFinish={handleFinish} />}
      </div>

      <div className="flex justify-between px-6 py-4 border-t border-stone-200 dark:border-stone-700">
        <Button variant="secondary" onClick={goBack} disabled={stepIndex === 0}>
          {t('common.back')}
        </Button>
        {currentStepId !== 'review' && (
          <Button onClick={goNext} disabled={currentStepInvalid}>
            {t('common.next')}
          </Button>
        )}
      </div>
      {currentStepInvalid && currentStepId !== 'review' && (
        <p className="px-6 pb-4 text-sm text-amber-600 -mt-2 text-right max-w-3xl mx-auto w-full">
          {t(`wizard.validation.${validationKeyFor(currentStepId, invalid)}`, {
            count: getClass(draft.classId)?.skillChoices.count ?? 1,
          })}
        </p>
      )}
    </div>
  )
}

function validationKeyFor(stepId: string, invalid: Record<string, boolean>): string {
  switch (stepId) {
    case 'race':
      return 'chooseRace'
    case 'class':
      return 'chooseClass'
    case 'background':
      return 'chooseBackground'
    case 'abilities':
      return 'allocateAbilities'
    case 'skills':
      return 'chooseSkills'
    case 'spells':
      return 'chooseSpells'
    case 'equipment':
      return 'chooseEquipment'
    case 'details':
      return 'enterName'
    default:
      return Object.keys(invalid)[0] ?? 'chooseRace'
  }
}

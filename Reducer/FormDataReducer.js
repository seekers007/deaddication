const initialStateFormData = {
  history: {
    cannabis: '',
    stimulants: '',
    hillucinogens: '',
    inhalants: '',
    substanceNotClassified: '',
    lastUsage: '',
    prevHistory: {
      thermos: '',
      insominia: '',
      diarrhoea: '',
      severePain: '',
      restlessness: '',
      otherPsychiatricComplecation: '',
    },

    mentalHealthAssisment: {
      depression: '',
      suicidalIdeationAndAttempt: '',
      confusion: '',
      aggresiveOutburst: '',
      hallucination: '',
      paranoia: '',
    },
    chronicHealthProblem: {
      diabetes: '',
      leverDisorder: '',
      epilepsy: '',
      respiratoryProblems: '',
      cardiacProblems: '',
    },
    otherInfo: {
      useOfTobacoProduct: '', //if true then description else no description
      description: '',
      allergiesToSpecificDrugs: '',
    },
  },
  social: {
    name: '',
    registrationNo: '',
    dateOfRegistration: '',
    DOB: '',
    sex: '',
    educationalBackground: '',
    religion: '',
    livingArrangements: '',
    phoneNo: '',
    gaurdianPhoneNo: '',

    address: {
      homeAddress: '',
      street: '',
      city: '',
      state: '',
      pinCode: '',
    },

    identityCard: '',
    priorTreatment: {
      bool: '', //is true the details else not
      details: {
        previousRehab: '',
        durationOfRecovery: '',
        fatherName: '',
      },
    },

    familyDetails: {
      fatherName: '',
      occupation: '',
      age: '',
      income: '',
      familySupport: {
        livingWithFamily: '',
        livingWithOther: '',
        livingAlone: '',
        livingOnStreet: '',
        supportPerson: '',
        relationOfPatient: '',
      },
    },
  },
  legalAndFinances: {
    employed: '',
    laidOff: '',
    everResigned: '',
    isHealthEnsured: '',
    satisfiedWithJob: '',

    occupationHistory: {
      employed: '',
      laidOff: '',
      everResigned: '',
      isHealthEnsured: '',
      satisfiedWithJob: '',
    },

    occupationalDamage: {
      typeOfWork: '',
      unEmployedPeriod: '',
      reasonOfUnemployment: '',
      disciplinaryAction: {
        bool: '',
        details: {
          absteneeism: '',
          warningOrMemos: '',
          suspentionOrder: '',
          dismissalOrder: '',
          transferOrder: '',
        },
      },
    },

    legalHistoryForArrest: {
      salesOfDrug: '',
      possesionOfDrug: '',
      drunkInfluenced: '',
      drunkAndDrive: '',
      accidentDrunkAndDrive: '',
      assult: '',
      otherReason: '',
    },
  },
  tratmentAndGoals: {
    shortTermGoals: {
      abstrainAlcoholAndDrugs: {
        goals: '',
        timeFrame: '',
      },
      backToLige: {
        goals: '',
        timeFrame: '',
      },
      improvedWorkLige: {
        goals: '',
        timeFrame: '',
      },
    },

    longTermGoals: {
      manageFinances: {
        goals: '',
        timeFrame: '',
      },
      dealWithDefectCharacters: {
        goals: '',
        timeFrame: '',
      },
      familyRelation: {
        goals: '',
        timeFrame: '',
      },

      recreationalActivities: {
        goals: '',
        timeFrame: '',
      },
    },
    followUPMeasures: {
      dealingWithRelapses: '',
      extentionDetails: {
        councellorsName: '',
        DateOfAdmissions: '',
        discharge: '',
      },
      followUpDetails: {
        date: '',
        issueDealtInCounseling: '',
        recoverySatus: '',
      },
    },
  },
};
const FormDataReducer = (state, action) => {
  switch (action.type) {
    case 'CANNABIS':
      break;
    case 'STIMULANTS':
      break;
    case 'HILLUCINOGENS':
      break;
    case 'INHALANTS':
      break;
    case 'SUBSTANCE_NOT_CLASSIFIED':
      break;
    case 'LAST_USAGE':
      break;
    case 'THERMOS':
      break;
    case 'INSOMINIA':
      break;
    case 'DIARRHOEA':
      break;
    case 'SEVERE_PAIN':
      break;
    case 'RESTLESSNESS':
      break;
    case 'OTHER_PSYCHIATRIC_COMPLICATION':
      break;
    case 'DEPRESSION':
      break;
    case 'SUICIDAL_IDEATION_AND_ATTEMPT':
      break;
    case 'CONFUSION':
      break;
    case 'AGGRESSIVE_OUTBURST':
      break;
    case 'HALLUCINATION':
      break;
    case 'PARANOIA':
      break;
    case 'DIABETES':
      break;
    case 'LEVER_DISORDER':
      break;
    case 'EPILEPSY':
      break;
    case 'RESPIRATORY_PROBLEMS':
      break;
    case 'CARDIAC_PROBLEMS':
      break;
    case 'USE_OF_TOBACCO_PRODUCT':
      break;
    case 'USE_OF_TOBACCO_PRODUCT_DESCRIPTION':
      break;
    case 'ALLERGIES_TO_SPECIFIC_DRUGS_IN_OTHER_INFO':
      break;
    case 'NAME':
      break;
    case 'REGISTRATION_NO':
      break;
    case 'DATE_OF_REGISTRATION':
      break;
    case 'DOB':
      break;
    case 'SEX':
      break;
    case 'EDUCATIONAL_BACKGROUND':
      break;
    case 'RELIGION':
      break;
    case 'LIVING_ARRANGEMENTS':
      break;
    case 'PHONE_NO':
      break;
    case 'GUARDIAN_PHONE_NO':
      break;
    case 'ADDRESS_HOME_ADDRESS':
      break;
    case 'ADDRESS_STREET':
      break;
    case 'ADDRESS_CITY':
      break;
    case 'ADDRESS_STATE':
      break;
    case 'ADDRESS_PIN_CODE':
      break;
    case 'IDENTITY_CARD':
      break;
    case 'PRIOR_TREATMENT_BOOL':
      break;
    case 'PRIOR_TREATMENT_DETAILS_PREVIOUS_REHAB':
      break;
    case 'PRIOR_TREATMENT_DETAILS_DURATION_OF_RECOVERY':
      break;
    case 'PRIOR_TREATMENT_DETAILS_FATHER_NAME':
      break;

    // form2
    case 'FAMILY_DETAILS_FATHER_NAME':
      break;
    case 'FAMILY_DETAILS_OCCUPATION':
      break;
    case 'FAMILY_DETAILS_AGE':
      break;
    case 'FAMILY_DETAILS_INCOME':
      break;
    case 'FAMILY_DETAILS_FAMILY_SUPPORT_LIVING_WITH_FAMILY':
      break;
    case 'FAMILY_DETAILS_FAMILY_SUPPORT_LIVING_WITH_OTHER':
      break;
    case 'FAMILY_DETAILS_FAMILY_SUPPORT_LIVING_ALONE':
      break;
    case 'FAMILY_DETAILS_FAMILY_SUPPORT_LIVING_ON_STREET':
      break;
    case 'FAMILY_DETAILS_FAMILY_SUPPORT_SUPPORT_PERSON':
      break;
    case 'FAMILY_DETAILS_FAMILY_SUPPORT_RELATION_OF_PATIENT':
      break;

    // form 3
    case 'LEGAL_AND_FINANCES_EMPLOYED':
      break;
    case 'LEGAL_AND_FINANCES_LAID_OFF':
      break;
    case 'LEGAL_AND_FINANCES_EVER_RESIGNED':
      break;
    case 'LEGAL_AND_FINANCES_IS_HEALTH_ENSURED':
      break;
    case 'LEGAL_AND_FINANCES_SATISFIED_WITH_JOB':
      break;
    case 'LEGAL_AND_FINANCES_OCCUPATION_HISTORY_OCCUPATION_HISTORY':
      break;
    case 'LEGAL_AND_FINANCES_OCCUPATION_HISTORY_EMPLOYED':
      break;
    case 'LEGAL_AND_FINANCES_OCCUPATION_HISTORY_LAID_OFF':
      break;
    case 'LEGAL_AND_FINANCES_OCCUPATION_HISTORY_EVER_RESIGNED':
      break;
    case 'LEGAL_AND_FINANCES_OCCUPATION_HISTORY_IS_HEALTH_ENSURED':
      break;
    case 'LEGAL_AND_FINANCES_OCCUPATION_HISTORY_ SATISFIED_WITH_JOB':
      break;
    case 'LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_TYPE_OF_WORK':
      break;
    case 'LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_UNEMPLOYED_PERIOD':
      break;
    case 'LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_REASON_OF_UNEMPLOYMENT':
      break;
    case 'LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_DISCIPLINARY_ACTION_BOOL':
      break;
    case 'LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_ABSTENEEISM':
      break;
    case 'LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_WARNING_OR_MEMOS':
      break;
    case 'LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_SUSPENSION_ORDER':
      break;
    case 'LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_DISMISSAL_ORDER':
      break;
    case 'LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_TRANSFER_ORDER':
      break;
    case 'LEGAL_AND_FINANCES_LEGAL_HISTORY_FOR_ARREST_SALES_OF_DRUG':
      break;
    case 'LEGAL_AND_FINANCES_LEGAL_HISTORY_FOR_ARREST_POSSISSION_OF_DRUG':
      break;
    case 'LEGAL_AND_FINANCES_LEGAL_HISTORY_FOR_ARREST_DRUNK_INFLUENCED':
      break;
    case 'LEGAL_AND_FINANCES_LEGAL_HISTORY_FOR_ARREST_DRUNK_AND_DRIVE':
      break;
    case 'LEGAL_AND_FINANCES_LEGAL_HISTORY_FOR_ARREST_ACCIDENT_DRUNK_AND_DRIVE':
      break;
    case 'LEGAL_AND_FINANCES_LEGAL_HISTORY_FOR_ARREST_ASSAULT':
      break;
    case 'LEGAL_AND_FINANCES_LEGAL_HISTORY_FOR_ARREST_OTHER_REASON':
      break;

    // form 4
    case 'TREATMENT_AND_GOALS_SHORT_TERM_GOALS_ABSTRAIN_ALCOHOL_AND_DRUGS_GOALS':
      break;
    case 'TREATMENT_AND_GOALS_SHORT_TERM_GOALS_ABSTRAIN_ALCOHOL_AND_DRUGS_TIME_FRAME':
      break;
    case 'TREATMENT_AND_GOALS_SHORT_TERM_GOALS_BACK_TO_LIFE_GOALS':
      break;
    case 'TREATMENT_AND_GOALS_SHORT_TERM_GOALS_BACK_TO_LIFE_TIME_FRAME':
      break;
    case 'TREATMENT_AND_GOALS_SHORT_TERM_GOALS_IMPROVED_WORK_LIFE_GOALS':
      break;
    case 'TREATMENT_AND_GOALS_SHORT_TERM_GOALS_IMPROVED_WORK_LIFE_TIME_FRAME':
      break;
    case 'TREATMENT_AND_GOALS_LONG_TERM_GOALS_MANAGE_FINANCES_GOALS':
      break;
    case 'TREATMENT_AND_GOALS_LONG_TERM_GOALS_MANAGE_FINANCES_TIME_FRAME':
      break;
    case 'TREATMENT_AND_GOALS_LONG_TERM_GOALS_DEAL_WITH_DEFECT_CHARACTERS_GOALS':
      break;
    case 'TREATMENT_AND_GOALS_LONG_TERM_GOALS_DEAL_WITH_DEFECT_CHARACTERS_TIME_FRAME':
      break;
    case 'TREATMENT_AND_GOALS_LONG_TERM_GOALS_FAMILY_RELATION_GOALS':
      break;
    case 'TREATMENT_AND_GOALS_LONG_TERM_GOALS_FAMILY_RELATION_TIME_FRAME':
      break;
    case 'TREATMENT_AND_GOALS_LONG_TERM_GOALS_RECREATIONAL_ACTIVITIES_TIME_FRAME':
      break;
    case 'TREATMENT_AND_GOALS_LONG_TERM_GOALS_RECREATIONAL_ACTIVITIES_GOALS':
      break;
    case 'cannabis':
      break;
    case 'RESET':
      return initialStateFormData;
    default:
      console.log('the default case is executed ');
  }
};

/*
  const [state, dispatch] = useReducer(reducer, initalState);
*/

export {FormDataReducer, initialStateFormData};

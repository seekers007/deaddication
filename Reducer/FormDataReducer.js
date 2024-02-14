const initialStateFormData = {
  history: {
    cannabis: {
      ageOfFirstUse: '',
      yearOfUse: '',
      yearsOfExessiveUse: '',
      specificTypeOfDrug: '',
      routeOfAdministration: '',
      frequency: '',
      quantity: '',
    },
    stimulants: {
      ageOfFirstUse: '',
      yearOfUse: '',
      yearsOfExessiveUse: '',
      specificTypeOfDrug: '',
      routeOfAdministration: '',
      frequency: '',
      quantity: '',
    },
    hillucinogens: {
      ageOfFirstUse: '',
      yearOfUse: '',
      yearsOfExessiveUse: '',
      specificTypeOfDrug: '',
      routeOfAdministration: '',
      frequency: '',
      quantity: '',
    },
    inhalants: {
      ageOfFirstUse: '',
      yearOfUse: '',
      yearsOfExessiveUse: '',
      specificTypeOfDrug: '',
      routeOfAdministration: '',
      frequency: '',
      quantity: '',
    },
    substanceNotClassified: {
      ageOfFirstUse: '',
      yearOfUse: '',
      yearsOfExessiveUse: '',
      specificTypeOfDrug: '',
      routeOfAdministration: '',
      frequency: '',
      quantity: '',
    },
    lastUsage: {
      lastDrinkAndDrug:'',
      diagnosis:'',
    },
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

    identityCard: {value: '', name: ''},
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
    case 'CANNABIS_AGE_OF_FIRST_USE':
      return {
        ...state,
        cannabis: {...state.cannabis, ageOfFirstUse: action.payload},
      };
    case 'CANNABIS_YEAR_OF_USE':
      return {
        ...state,
        cannabis: {...state.cannabis, yearOfUse: action.payload},
      };
    case 'CANNABIS_YEARS_OF_EXECCSIVE_USE':
      return {
        ...state,
        cannabis: {...state.cannabis, yearsOfExessiveUse: action.payload},
      };
    case 'CANNABIS_SPECIFIC_TYPE_OF_DRUG':
      return {
        ...state,
        cannabis: {...state.cannabis, specificTypeOfDrug: action.payload},
      };
    case 'CANNABIS_ROUTE_OF_ADMINISTRATION':
      return {
        ...state,
        cannabis: {...state.cannabis, routeOfAdministration: action.payload},
      };
    case 'CANNABIS_FREQUENCY':
      return {
        ...state,
        cannabis: {...state.cannabis, frequency: action.payload},
      };
    case 'CANNABIS_QUANTITY':
      return {
        ...state,
        cannabis: {...state.cannabis, quantity: action.payload},
      };
    case 'STIMULANTS_AGE_OF_FIRST_USE':
      return {
        ...state,
        stimulants: {...state.stimulants, ageOfFirstUse: action.payload},
      };
    case 'STIMULANTS_YEAR_OF_USE':
      return {
        ...state,
        stimulants: {...state.stimulants, yearOfUse: action.payload},
      };
    case 'STIMULANTS_YEARS_OF_EXECCSIVE_USE':
      return {
        ...state,
        stimulants: {...state.stimulants, yearsOfExessiveUse: action.payload},
      };
    case 'STIMULANTS_SPECIFIC_TYPE_OF_DRUG':
      return {...state,
        stimulants: {...state.stimulants, specificTypeOfDrug: action.payload}},;
    case 'STIMULANTS_ROUTE_OF_ADMINISTRATION':
      return {...state,
        stimulants: {...state.stimulants, routeOfAdministration: action.payload}};
    case 'STIMULANTS_FREQUENCY':
      return {...state,
        stimulants: {...state.stimulants, frequency: action.payload}};
    case 'STIMULANTS_QUANTITY':
      return {...state,
        stimulants: {...state.stimulants, quantity: action.payload}};
    case 'HILLUCINOGENS_AGE_OF_FIRST_USE':
      return {...state,
        hillucinogens: {...state.hillucinogens, ageOfFirstUse: action.payload}};
    case 'HILLUCINOGENS_YEAR_OF_USE':
      return {...state,
        hillucinogens: {...state.hillucinogens, yearOfUse: action.payload}};
    case 'HILLUCINOGENS_YEARS_OF_EXECCSIVE_USE':
      return {...state,
        hillucinogens: {...state.hillucinogens, yearsOfExessiveUse: action.payload}};
    case 'HILLUCINOGENS_SPECIFIC_TYPE_OF_DRUG':
      return {...state,
        hillucinogens: {...state.hillucinogens, specificTypeOfDrug: action.payload}};
    case 'HILLUCINOGENS_ROUTE_OF_ADMINISTRATION':
      return {...state,
        hillucinogens: {...state.hillucinogens, routeOfAdministration: action.payload}};
    case 'HILLUCINOGENS_FREQUENCY':
      return {...state,
        hillucinogens: {...state.hillucinogens, frequency: action.payload}};
    case 'HILLUCINOGENS_QUANTITY':
      return {...state,
        hillucinogens: {...state.hillucinogens, quantity: action.payload}};
    case 'INHALANTS_AGE_OF_FIRST_USE':
      return {...state,
        inhalants: {...state.inhalants, ageOfFirstUse: action.payload}};
    case 'INHALANTS_YEAR_OF_USE':
      return {...state, inhalants: {...state.inhalants,yearOfUse : action.payload}};
    case 'INHALANTS_YEARS_OF_EXECCSIVE_USE':
      return {...state, inhalants: {...state.inhalants, yearsOfExessiveUse: action.payload}};
    case 'INHALANTS_SPECIFIC_TYPE_OF_DRUG':
      return {...state, inhalants: {...state.inhalants, specificTypeOfDrug: action.payload}};
    case 'INHALANTS_ROUTE_OF_ADMINISTRATION':
      return {...state, inhalants: {...state.inhalants, routeOfAdministration: action.payload}};
    case 'INHALANTS_FREQUENCY':
      return {...state, inhalants: {...state.inhalants, frequency : action.payload}};
    case 'INHALANTS_QUANTITY':
      return {...state, inhalants: {...state.inhalants, quantity: action.payload}};
    case 'SUBSTANCE_NOT_CLASSIFIED_AGE_OF_FIRST_USE':
      return {...state, substanceNotClassified: {...state.substanceNotClassified, ageOfFirstUse: action.payload}};
    case 'SUBSTANCE_NOT_CLASSIFIED_YEAR_OF_USE':
      return {...state,substanceNotClassified: {...state.substanceNotClassified, yearOfUse: action.payload}};
    case 'SUBSTANCE_NOT_CLASSIFIED_YEARS_OF_EXECCSIVE_USE':
      return {...state,substanceNotClassified: {...state.substanceNotClassified, yearsOfExessiveUse: action.payload}};
    case 'SUBSTANCE_NOT_CLASSIFIED_SPECIFIC_TYPE_OF_DRUG':
      return {...state,substanceNotClassified: {...state.substanceNotClassified, specificTypeOfDrug: action.payload}};
    case 'SUBSTANCE_NOT_CLASSIFIED_ROUTE_OF_ADMINISTRATION':
      return {...state,substanceNotClassified: {...state.substanceNotClassified, routeOfAdministration: action.payload}};
    case 'SUBSTANCE_NOT_CLASSIFIED_FREQUENCY':
      return {...state,substanceNotClassified: {...state.substanceNotClassified, frequency : action.payload}};
    case 'SUBSTANCE_NOT_CLASSIFIED_QUANTITY':
      return {...state,substanceNotClassified: {...state.substanceNotClassified, quantity: action.payload}};
  case 'LAST_USAGE_LAST_DRINK_AND_DRUG':
    return {...state,lastUsage:{...state.lastUsage,lastDrinkAndDrug:action.payload}};
    case 'LAST_USAGE_DIAGNOSIS':
    return {...state,lastUsage:{...state.lastUsage,diagnosis:action.payload}}; 
      case 'THERMOS':
      return {...state,prevHistory:{...state.prevHistory,thermos:action.payload}};
    case 'INSOMINIA':
      return {...state,prevHistory:{...state.prevHistory,insominia:action.payload}};
    case 'DIARRHOEA':
      return {...state,prevHistory:{...state.prevHistory,diarrhoea:action.payload}};
    case 'SEVERE_PAIN':
      return {...state,prevHistory:{...state.prevHistory,severePain:action.payload}};
    case 'RESTLESSNESS':
      return {...state,prevHistory:{...state.prevHistory,restlessness:action.payload}};
    case 'OTHER_PSYCHIATRIC_COMPLICATION':
      return {...state,prevHistory:{...state.prevHistory,otherPsychiatricComplecation:action.payload}};
    case 'DEPRESSION':
      return {...state,mentalHealthAssisment:{...state.mentalHealthAssisment,depression:action.payload}};
    case 'SUICIDAL_IDEATION_AND_ATTEMPT':
      return {...state,mentalHealthAssisment:{...state.mentalHealthAssisment,suicidalIdeationAndAttempt:action.payload}};
    case 'CONFUSION':
      return {...state,mentalHealthAssisment:{...state.mentalHealthAssisment,confusion:action.payload}};
    case 'AGGRESSIVE_OUTBURST':
      return {...state,mentalHealthAssisment:{...state.mentalHealthAssisment,confusion:action.payload}};
    case 'HALLUCINATION':
      return {...state,mentalHealthAssisment:{...state.mentalHealthAssisment,aggresiveOutburst:action.payload}};
    case 'PARANOIA':
      return {...state,mentalHealthAssisment:{...state.mentalHealthAssisment,paranoia:action.payload}};
    case 'DIABETES':
      return {...state,chronicHealthProblem:{...state.chronicHealthProblem,diabetes:action.payload}};
    case 'LEVER_DISORDER':
      return {...state,chronicHealthProblem:{...state.chronicHealthProblem,leverDisorder:action.payload}};
    case 'EPILEPSY':
      return {...state,chronicHealthProblem:{...state.chronicHealthProblem,epilepsy:action.payload}};
    case 'RESPIRATORY_PROBLEMS':
      return {...state,chronicHealthProblem:{...state.chronicHealthProblem,respiratoryProblems:action.payload}};
    case 'CARDIAC_PROBLEMS':
      return {...state,chronicHealthProblem:{...state.chronicHealthProblem,cardiacProblems:action.payload}};
    case 'USE_OF_TOBACCO_PRODUCT':
      return {...state,otherInfo:{...state.otherInfo,useOfTobacoProduct:action.payload}};
    case 'USE_OF_TOBACCO_PRODUCT_DESCRIPTION':
      return {...state,otherInfo:{...state.otherInfo,description:action.payload}};
    case 'ALLERGIES_TO_SPECIFIC_DRUGS_IN_OTHER_INFO':
      return {...state,otherInfo:{...state.otherInfo,allergiesToSpecificDrugs:action.payload}};
    case 'NAME':
      return {...state};
    case 'REGISTRATION_NO':
      return {...state};
    case 'DATE_OF_REGISTRATION':
      return {...state};
    case 'DOB':
      return {...state};
    case 'SEX':
      return {...state};
    case 'EDUCATIONAL_BACKGROUND':
      return {...state};
    case 'RELIGION':
      return {...state};
    case 'LIVING_ARRANGEMENTS':
      return {...state};
    case 'PHONE_NO':
      return {...state};
    case 'GUARDIAN_PHONE_NO':
      return {...state};
    case 'ADDRESS_HOME_ADDRESS':
      return {...state};
    case 'ADDRESS_STREET':
      return {...state};
    case 'ADDRESS_CITY':
      return {...state};
    case 'ADDRESS_STATE':
      return {...state};
    case 'ADDRESS_PIN_CODE':
      return {...state};
    case 'IDENTITY_CARD':
      return {...state};
    case 'PRIOR_TREATMENT_BOOL':
      return {...state};
    case 'PRIOR_TREATMENT_DETAILS_PREVIOUS_REHAB':
      return {...state};
    case 'PRIOR_TREATMENT_DETAILS_DURATION_OF_RECOVERY':
      return {...state};
    case 'PRIOR_TREATMENT_DETAILS_FATHER_NAME':
      return {...state};

    // form2
    case 'FAMILY_DETAILS_FATHER_NAME':
      return {...state};
    case 'FAMILY_DETAILS_OCCUPATION':
      return {...state};
    case 'FAMILY_DETAILS_AGE':
      return {...state};
    case 'FAMILY_DETAILS_INCOME':
      return {...state};
    case 'FAMILY_DETAILS_FAMILY_SUPPORT_LIVING_WITH_FAMILY':
      return {...state};
    case 'FAMILY_DETAILS_FAMILY_SUPPORT_LIVING_WITH_OTHER':
      return {...state};
    case 'FAMILY_DETAILS_FAMILY_SUPPORT_LIVING_ALONE':
      return {...state};
    case 'FAMILY_DETAILS_FAMILY_SUPPORT_LIVING_ON_STREET':
      return {...state};
    case 'FAMILY_DETAILS_FAMILY_SUPPORT_SUPPORT_PERSON':
      return {...state};
    case 'FAMILY_DETAILS_FAMILY_SUPPORT_RELATION_OF_PATIENT':
      return {...state};

    // form 3
    case 'LEGAL_AND_FINANCES_EMPLOYED':
      return {...state};
    case 'LEGAL_AND_FINANCES_LAID_OFF':
      return {...state};
    case 'LEGAL_AND_FINANCES_EVER_RESIGNED':
      return {...state};
    case 'LEGAL_AND_FINANCES_IS_HEALTH_ENSURED':
      return {...state};
    case 'LEGAL_AND_FINANCES_SATISFIED_WITH_JOB':
      return {...state};
    case 'LEGAL_AND_FINANCES_OCCUPATION_HISTORY_OCCUPATION_HISTORY':
      return {...state};
    case 'LEGAL_AND_FINANCES_OCCUPATION_HISTORY_EMPLOYED':
      return {...state};
    case 'LEGAL_AND_FINANCES_OCCUPATION_HISTORY_LAID_OFF':
      return {...state};
    case 'LEGAL_AND_FINANCES_OCCUPATION_HISTORY_EVER_RESIGNED':
      return {...state};
    case 'LEGAL_AND_FINANCES_OCCUPATION_HISTORY_IS_HEALTH_ENSURED':
      return {...state};
    case 'LEGAL_AND_FINANCES_OCCUPATION_HISTORY_ SATISFIED_WITH_JOB':
      return {...state};
    case 'LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_TYPE_OF_WORK':
      return {...state};
    case 'LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_UNEMPLOYED_PERIOD':
      return {...state};
    case 'LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_REASON_OF_UNEMPLOYMENT':
      return {...state};
    case 'LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_DISCIPLINARY_ACTION_BOOL':
      return {...state};
    case 'LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_ABSTENEEISM':
      return {...state};
    case 'LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_WARNING_OR_MEMOS':
      return {...state};
    case 'LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_SUSPENSION_ORDER':
      return {...state};
    case 'LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_DISMISSAL_ORDER':
      return {...state};
    case 'LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_TRANSFER_ORDER':
      return {...state};
    case 'LEGAL_AND_FINANCES_LEGAL_HISTORY_FOR_ARREST_SALES_OF_DRUG':
      return {...state};
    case 'LEGAL_AND_FINANCES_LEGAL_HISTORY_FOR_ARREST_POSSISSION_OF_DRUG':
      return {...state};
    case 'LEGAL_AND_FINANCES_LEGAL_HISTORY_FOR_ARREST_DRUNK_INFLUENCED':
      return {...state};
    case 'LEGAL_AND_FINANCES_LEGAL_HISTORY_FOR_ARREST_DRUNK_AND_DRIVE':
      return {...state};
    case 'LEGAL_AND_FINANCES_LEGAL_HISTORY_FOR_ARREST_ACCIDENT_DRUNK_AND_DRIVE':
      return {...state};
    case 'LEGAL_AND_FINANCES_LEGAL_HISTORY_FOR_ARREST_ASSAULT':
      return {...state};
    case 'LEGAL_AND_FINANCES_LEGAL_HISTORY_FOR_ARREST_OTHER_REASON':
      return {...state};

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

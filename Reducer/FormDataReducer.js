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
      lastDrinkAndDrug: '',
      diagnosis: '',
    },
    prevHistory: {
      thermos: '',
      insominia: '',
      diarrhoea: '',
      severePain: '',
      restlessness: '',
      otherPsychiatricComplication: '',
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
    guardianPhoneNo: '',

    address: {
      homeAddress: '',
      street: '',
      city: '',
      state: '',
      pinCode: '',
    },

    identityCard: {value: '', name: ''},
    priorTreatment: {
      bool: '', //if true the details else not
      details: {
        previousRehab: '',
        yearOfAdmit: '',
        durationOfRecovery: '',
        // fatherName: '',
      },
    },

    familyDetails: {
      fatherName: '',
      motherName: '',
      fatherOccupation: '',
      fatherAge: '',
      fatherIncome: '',
      motherOccupation: '',
      motherIncome: '',
      motherAge: '',
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
      startWorkingAge:''
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
      backToLife: {
        goals: '',
        timeFrame: '',
      },
      improvedWorkLife: {
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
      dealingRelapses:''
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
        history: {
          ...state.history,
          cannabis: {...state.history.cannabis, ageOfFirstUse: action.payload},
        },
      };
    case 'CANNABIS_YEAR_OF_USE':
      return {
        ...state,
        history: {
          ...state.history,
          cannabis: {...state.history.cannabis, yearOfUse: action.payload},
        },
      };
    case 'CANNABIS_YEARS_OF_EXECCSIVE_USE':
      return {
        ...state,
        history: {
          ...state.history,
          cannabis: {
            ...state.history.cannabis,
            yearsOfExessiveUse: action.payload,
          },
        },
      };
    case 'CANNABIS_SPECIFIC_TYPE_OF_DRUG':
      return {
        ...state,
        history: {
          ...state.history,
          cannabis: {
            ...state.history.cannabis,
            specificTypeOfDrug: action.payload,
          },
        },
      };
    case 'CANNABIS_ROUTE_OF_ADMINISTRATION':
      return {
        ...state,
        history: {
          ...state.history,
          cannabis: {
            ...state.history.cannabis,
            routeOfAdministration: action.payload,
          },
        },
      };
    case 'CANNABIS_FREQUENCY':
      return {
        ...state,
        history: {
          ...state.history,
          cannabis: {...state.history.cannabis, frequency: action.payload},
        },
      };
    case 'CANNABIS_QUANTITY':
      return {
        ...state,
        history: {
          ...state.history,
          cannabis: {...state.history.cannabis, quantity: action.payload},
        },
      };
    case 'STIMULANTS_AGE_OF_FIRST_USE':
      return {
        ...state,
        history: {
          ...state.history,
          stimulants: {
            ...state.history.stimulants,
            ageOfFirstUse: action.payload,
          },
        },
      };
    case 'STIMULANTS_YEAR_OF_USE':
      return {
        ...state,
        history: {
          ...state.history,
          stimulants: {...state.history.stimulants, yearOfUse: action.payload},
        },
      };
    case 'STIMULANTS_YEARS_OF_EXECCSIVE_USE':
      return {
        ...state,
        history: {
          ...state.history,
          stimulants: {
            ...state.history.stimulants,
            yearsOfExessiveUse: action.payload,
          },
        },
      };
    case 'STIMULANTS_SPECIFIC_TYPE_OF_DRUG':
      return {
        ...state,
        history: {
          ...state.history,
          stimulants: {
            ...state.history.stimulants,
            specificTypeOfDrug: action.payload,
          },
        },
      };
    case 'STIMULANTS_ROUTE_OF_ADMINISTRATION':
      return {
        ...state,
        history: {
          ...state.history,
          stimulants: {
            ...state.history.stimulants,
            routeOfAdministration: action.payload,
          },
        },
      };
    case 'STIMULANTS_FREQUENCY':
      return {
        ...state,
        history: {
          ...state.history,
          stimulants: {...state.history.stimulants, frequency: action.payload},
        },
      };
    case 'STIMULANTS_QUANTITY':
      return {
        ...state,
        history: {
          ...state.history,
          stimulants: {...state.history.stimulants, quantity: action.payload},
        },
      };
    case 'HILLUCINOGENS_AGE_OF_FIRST_USE':
      return {
        ...state,
        history: {
          ...state.history,
          hillucinogens: {
            ...state.history.hillucinogens,
            ageOfFirstUse: action.payload,
          },
        },
      };
    case 'HILLUCINOGENS_YEAR_OF_USE':
      return {
        ...state,
        history: {
          ...state.history,
          hillucinogens: {
            ...state.history.hillucinogens,
            yearOfUse: action.payload,
          },
        },
      };
    case 'HILLUCINOGENS_YEARS_OF_EXECCSIVE_USE':
      return {
        ...state,
        history: {
          ...state.history,
          hillucinogens: {
            ...state.history.hillucinogens,
            yearsOfExessiveUse: action.payload,
          },
        },
      };
    case 'HILLUCINOGENS_SPECIFIC_TYPE_OF_DRUG':
      return {
        ...state,
        history: {
          ...state.history,
          hillucinogens: {
            ...state.history.hillucinogens,
            specificTypeOfDrug: action.payload,
          },
        },
      };
    case 'HILLUCINOGENS_ROUTE_OF_ADMINISTRATION':
      return {
        ...state,
        history: {
          ...state.history,
          hillucinogens: {
            ...state.history.hillucinogens,
            routeOfAdministration: action.payload,
          },
        },
      };
    case 'HILLUCINOGENS_FREQUENCY':
      return {
        ...state,
        history: {
          ...state.history,
          hillucinogens: {
            ...state.history.hillucinogens,
            frequency: action.payload,
          },
        },
      };
    case 'HILLUCINOGENS_QUANTITY':
      return {
        ...state,
        history: {
          ...state.history,
          hillucinogens: {
            ...state.history.hillucinogens,
            quantity: action.payload,
          },
        },
      };
    case 'INHALANTS_AGE_OF_FIRST_USE':
      return {
        ...state,
        history: {
          ...state.history,
          inhalants: {
            ...state.history.inhalants,
            ageOfFirstUse: action.payload,
          },
        },
      };
    case 'INHALANTS_YEAR_OF_USE':
      return {
        ...state,
        history: {
          ...state.history,
          inhalants: {...state.history.inhalants, yearOfUse: action.payload},
        },
      };
    case 'INHALANTS_YEARS_OF_EXECCSIVE_USE':
      return {
        ...state,
        history: {
          ...state.history,
          inhalants: {
            ...state.history.inhalants,
            yearsOfExessiveUse: action.payload,
          },
        },
      };
    case 'INHALANTS_SPECIFIC_TYPE_OF_DRUG':
      return {
        ...state,
        history: {
          ...state.history,
          inhalants: {
            ...state.history.inhalants,
            specificTypeOfDrug: action.payload,
          },
        },
      };
    case 'INHALANTS_ROUTE_OF_ADMINISTRATION':
      return {
        ...state,
        history: {
          ...state.history,
          inhalants: {
            ...state.history.inhalants,
            routeOfAdministration: action.payload,
          },
        },
      };
    case 'INHALANTS_FREQUENCY':
      return {
        ...state,
        history: {
          ...state.history,
          inhalants: {...state.history.inhalants, frequency: action.payload},
        },
      };
    case 'INHALANTS_QUANTITY':
      return {
        ...state,
        history: {
          ...state.history,
          inhalants: {...state.history.inhalants, quantity: action.payload},
        },
      };
    case 'SUBSTANCE_NOT_CLASSIFIED_AGE_OF_FIRST_USE':
      return {
        ...state,
        history: {
          ...state.history,
          substanceNotClassified: {
            ...state.history.substanceNotClassified,
            ageOfFirstUse: action.payload,
          },
        },
      };
    case 'SUBSTANCE_NOT_CLASSIFIED_YEAR_OF_USE':
      return {
        ...state,
        history: {
          ...state.history,
          substanceNotClassified: {
            ...state.history.substanceNotClassified,
            yearOfUse: action.payload,
          },
        },
      };
    case 'SUBSTANCE_NOT_CLASSIFIED_YEARS_OF_EXECCSIVE_USE':
      return {
        ...state,
        history: {
          ...state.history,
          substanceNotClassified: {
            ...state.history.substanceNotClassified,
            yearsOfExessiveUse: action.payload,
          },
        },
      };
    case 'SUBSTANCE_NOT_CLASSIFIED_SPECIFIC_TYPE_OF_DRUG':
      return {
        ...state,
        history: {
          ...state.history,
          substanceNotClassified: {
            ...state.history.substanceNotClassified,
            specificTypeOfDrug: action.payload,
          },
        },
      };
    case 'SUBSTANCE_NOT_CLASSIFIED_ROUTE_OF_ADMINISTRATION':
      return {
        ...state,
        history: {
          ...state.history,
          substanceNotClassified: {
            ...state.history.substanceNotClassified,
            routeOfAdministration: action.payload,
          },
        },
      };
    case 'SUBSTANCE_NOT_CLASSIFIED_FREQUENCY':
      return {
        ...state,
        history: {
          ...state.history,
          substanceNotClassified: {
            ...state.history.substanceNotClassified,
            frequency: action.payload,
          },
        },
      };
    case 'SUBSTANCE_NOT_CLASSIFIED_QUANTITY':
      return {
        ...state,
        history: {
          ...state.history,
          substanceNotClassified: {
            ...state.history.substanceNotClassified,
            quantity: action.payload,
          },
        },
      };
    case 'LAST_USAGE_LAST_DRINK_AND_DRUG':
      return {
        ...state,
        history: {
          ...state.history,
          lastUsage: {
            ...state.history.lastUsage,
            lastDrinkAndDrug: action.payload,
          },
        },
      };
    case 'LAST_USAGE_DIAGNOSIS':
      return {
        ...state,
        history: {
          ...state.history,
          lastUsage: {...state.history.lastUsage, diagnosis: action.payload},
        },
      };
    case 'THERMOS':
      return {
        ...state,
        history: {
          ...state.history,
          prevHistory: {...state.history.prevHistory, thermos: action.payload},
        },
      };
    case 'INSOMINIA':
      return {
        ...state,
        history: {
          ...state.history,
          prevHistory: {
            ...state.history.prevHistory,
            insominia: action.payload,
          },
        },
      };
    case 'DIARRHOEA':
      return {
        ...state,
        history: {
          ...state.history,
          prevHistory: {
            ...state.history.prevHistory,
            diarrhoea: action.payload,
          },
        },
      };
    case 'SEVERE_PAIN':
      return {
        ...state,
        history: {
          ...state.history,
          prevHistory: {
            ...state.history.prevHistory,
            severePain: action.payload,
          },
        },
      };
    case 'RESTLESSNESS':
      return {
        ...state,
        prevHistory: {
          ...state.history.prevHistory,
          restlessness: action.payload,
        },
      };
    case 'OTHER_PSYCHIATRIC_COMPLICATION':
      return {
        ...state,
        history: {
          ...state.history,
          prevHistory: {
            ...state.history.prevHistory,
            otherPsychiatricComplication: action.payload,
          },
        },
      };
    case 'DEPRESSION':
      return {
        ...state,
        history: {
          ...state.history,
          mentalHealthAssisment: {
            ...state.history.mentalHealthAssisment,
            depression: action.payload,
          },
        },
      };
    case 'SUICIDAL_IDEATION_AND_ATTEMPT':
      return {
        ...state,
        history: {
          ...state.history,
          mentalHealthAssisment: {
            ...state.history.mentalHealthAssisment,
            suicidalIdeationAndAttempt: action.payload,
          },
        },
      };
    case 'CONFUSION':
      return {
        ...state,
        history: {
          ...state.history,
          mentalHealthAssisment: {
            ...state.history.mentalHealthAssisment,
            confusion: action.payload,
          },
        },
      };
    case 'AGGRESSIVE_OUTBURST':
      return {
        ...state,
        history: {
          ...state.history,
          mentalHealthAssisment: {
            ...state.history.mentalHealthAssisment,
            aggresiveOutburst: action.payload,
          },
        },
      };
    case 'HALLUCINATION':
      return {
        ...state,
        history: {
          ...state.history,
          mentalHealthAssisment: {
            ...state.history.mentalHealthAssisment,
            hallucination: action.payload,
          },
        },
      };
    case 'PARANOIA':
      return {
        ...state,
        history: {
          ...state.history,
          mentalHealthAssisment: {
            ...state.history.mentalHealthAssisment,
            paranoia: action.payload,
          },
        },
      };
    case 'DIABETES':
      return {
        ...state,
        history: {
          ...state.history,
          chronicHealthProblem: {
            ...state.history.chronicHealthProblem,
            diabetes: action.payload,
          },
        },
      };
    case 'LEVER_DISORDER':
      return {
        ...state,
        history: {
          ...state.history,
          chronicHealthProblem: {
            ...state.history.chronicHealthProblem,
            leverDisorder: action.payload,
          },
        },
      };
    case 'EPILEPSY':
      return {
        ...state,
        history: {
          ...state.history,
          chronicHealthProblem: {
            ...state.history.chronicHealthProblem,
            epilepsy: action.payload,
          },
        },
      };
    case 'RESPIRATORY_PROBLEMS':
      return {
        ...state,
        history: {
          ...state.history,
          chronicHealthProblem: {
            ...state.history.chronicHealthProblem,
            respiratoryProblems: action.payload,
          },
        },
      };
    case 'CARDIAC_PROBLEMS':
      return {
        ...state,
        history: {
          ...state.history,
          chronicHealthProblem: {
            ...state.history.chronicHealthProblem,
            cardiacProblems: action.payload,
          },
        },
      };
    case 'USE_OF_TOBACCO_PRODUCT':
      return {
        ...state,
        history: {
          ...state.history,
          otherInfo: {
            ...state.history.otherInfo,
            useOfTobacoProduct: action.payload,
          },
        },
      };
    case 'USE_OF_TOBACCO_PRODUCT_DESCRIPTION':
      return {
        ...state,
        history: {
          ...state.history,
          otherInfo: {...state.history.otherInfo, description: action.payload},
        },
      };
    case 'ALLERGIES_TO_SPECIFIC_DRUGS_IN_OTHER_INFO':
      return {
        ...state,
        history: {
          ...state.history,
          otherInfo: {
            ...state.history.otherInfo,
            allergiesToSpecificDrugs: action.payload,
          },
        },
      };
    case 'NAME':
      return {...state, social: {...state.social, name: action.payload}};
    case 'REGISTRATION_NO':
      return {
        ...state,
        social: {...state.social, registrationNo: action.payload},
      };
    case 'DATE_OF_REGISTRATION':
      return {
        ...state,
        social: {...state.social, dateOfRegistration: action.payload},
      };
    case 'DOB':
      return {
        ...state,
        social: {...state.social, DOB: action.payload},
      };
    case 'SEX':
      return {
        ...state,
        social: {...state.social, sex: action.payload},
      };
    case 'EDUCATIONAL_BACKGROUND':
      return {
        ...state,
        social: {...state.social, educationalBackground: action.payload},
      };
    case 'RELIGION':
      return {
        ...state,
        social: {...state.social, religion: action.payload},
      };
    case 'LIVING_ARRANGEMENTS':
      return {
        ...state,
        social: {...state.social, livingArrangements: action.payload},
      };
    case 'PHONE_NO':
      return {
        ...state,
        social: {...state.social, phoneNo: action.payload},
      };
    case 'GUARDIAN_PHONE_NO':
      return {
        ...state,
        social: {...state.social, guardianPhoneNo: action.payload},
      };
    case 'ADDRESS_HOME_ADDRESS':
      return {
        ...state,
        social: {
          ...state.social,
          address: {...state.social.address, homeAddress: action.payload},
        },
      };
    case 'ADDRESS_STREET':
      return {
        ...state,
        social: {
          ...state.social,
          address: {...state.social.address, street: action.payload},
        },
      };
    case 'ADDRESS_CITY':
      return {
        ...state,
        social: {
          ...state.social,
          address: {...state.social.address, city: action.payload},
        },
      };
    case 'ADDRESS_STATE':
      return {
        ...state,
        social: {
          ...state.social,
          address: {...state.social.address, state: action.payload},
        },
      };
    case 'ADDRESS_PIN_CODE':
      return {
        ...state,
        social: {
          ...state.social,
          address: {...state.social.address, pinCode: action.payload},
        },
      };
    case 'IDENTITY_CARD_NAME':
      return {
        ...state,
        social: {
          ...state.social,
          identityCard: {...state.social.identityCard, name: action.payload}, //name and value both will be sent at the same time
        },
      };
    // case 'IDENTITY_CARD_VALUE':
    //   return {
    //     ...state,
    //     social: {
    //       ...state.social,
    //       identityCard: {...state.social.identityCard, value: action.payload}, //name and value both will be sent at the same time
    //     },
    //   };
    case 'PRIOR_TREATMENT_BOOL':
      return {
        ...state,
        social: {
          ...state.social,
          priorTreatment: {
            ...state.social.priorTreatment,
            bool: action.payload,
          },
        },
      };
    case 'PRIOR_TREATMENT_DETAILS_PREVIOUS_REHAB':
      return {
        ...state,
        social: {
          ...state.social,
          priorTreatment: {
            ...state.social.priorTreatment,
            details: {
              ...state.social.priorTreatment.details,
              previousRehab: action.payload,
            },
          },
        },
      };

    case 'PRIOR_TREATMENT_DETAILS_YEAR_OF_REHAB_ADMIT':
      return {
        ...state,
        social: {
          ...state.social,
          priorTreatment: {
            ...state.social.priorTreatment,
            details: {
              ...state.social.priorTreatment.details,
              yearOfAdmit: action.payload,
            },
          },
        },
      };
    case 'PRIOR_TREATMENT_DETAILS_DURATION_OF_RECOVERY':
      return {
        ...state,
        social: {
          ...state.social,
          priorTreatment: {
            ...state.social.priorTreatment,
            details: {
              ...state.social.priorTreatment.details,
              durationOfRecovery: action.payload,
            },
          },
        },
      };
    // case 'PRIOR_TREATMENT_DETAILS_FATHER_NAME':
    //   return {
    //     ...state,
    //     social: {
    //       ...state.social,
    //       priorTreatment: {
    //         ...state.social.priorTreatment,
    //         details: {
    //           ...state.social.priorTreatment.details,
    //           fatherName: action.payload,
    //         },
    //       },
    //     },
    //   };

    // form2
    case 'FAMILY_DETAILS_FATHER_NAME':
      return {
        ...state,
        social: {
          ...state.social,
          familyDetails: {
            ...state.social.familyDetails,
            fatherName: action.payload,
          },
        },
      };

    case 'FAMILY_DETAILS_MOTHER_NAME':
      return {
        ...state,
        social: {
          ...state.social,
          familyDetails: {
            ...state.social.familyDetails,
            motherName: action.payload,
          },
        },
      };
    case 'FAMILY_DETAILS_FATHER_OCCUPATION':
      return {
        ...state,
        social: {
          ...state.social,
          familyDetails: {
            ...state.social.familyDetails,
            fatherOccupation: action.payload,
          },
        },
      };

    case 'FAMILY_DETAILS_MOTHER_OCCUPATION':
      return {
        ...state,
        social: {
          ...state.social,
          familyDetails: {
            ...state.social.familyDetails,
            motherOccupation: action.payload,
          },
        },
      };

    // case 'FAMILY_DETAILS_MOTHER_OCCUPATION':
    //   return {
    //     ...state,
    //     social: {
    //       ...state.social,
    //       familyDetails: {
    //         ...state.social.familyDetails,
    //         moduletherOccupation: action.payload,
    //       },
    //     },
    //   };
    case 'FAMILY_DETAILS_FATHER_AGE':
      return {
        ...state,
        social: {
          ...state.social,
          familyDetails: {
            ...state.social.familyDetails,
            fatherAge: action.payload,
          },
        },
      };

    case 'FAMILY_DETAILS_MOTHER_AGE':
      return {
        ...state,
        social: {
          ...state.social,
          familyDetails: {
            ...state.social.familyDetails,
            motherAge: action.payload,
          },
        },
      };
    case 'FAMILY_DETAILS_INCOME':
      return {
        ...state,
        social: {
          ...state.social,
          familyDetails: {
            ...state.social.familyDetails,
            fatherIncome: action.payload,
          },
        },
      };

    case 'FAMILY_DETAILS_MOTHER_INCOME':
      return {
        ...state,
        social: {
          ...state.social,
          familyDetails: {
            ...state.social.familyDetails,
            motherIncome: action.payload,
          },
        },
      };
    case 'FAMILY_DETAILS_FAMILY_SUPPORT_LIVING_WITH_FAMILY':
      return {
        ...state,
        social: {
          ...state.social,
          familyDetails: {
            ...state.social.familyDetails,
            familySupport: {
              ...state.social.familyDetails.familySupport,
              livingWithFamily: action.payload,
            },
          },
        },
      };
    case 'FAMILY_DETAILS_FAMILY_SUPPORT_LIVING_WITH_OTHER':
      return {
        ...state,
        social: {
          ...state.social,
          familyDetails: {
            ...state.social.familyDetails,
            familySupport: {
              ...state.social.familyDetails.familySupport,
              livingWithOther: action.payload,
            },
          },
        },
      };
    case 'FAMILY_DETAILS_FAMILY_SUPPORT_LIVING_ALONE':
      return {
        ...state,
        social: {
          ...state.social,
          familyDetails: {
            ...state.social.familyDetails,
            familySupport: {
              ...state.social.familyDetails.familySupport,
              livingAlone: action.payload,
            },
          },
        },
      };
    case 'FAMILY_DETAILS_FAMILY_SUPPORT_LIVING_ON_STREET':
      return {
        ...state,
        social: {
          ...state.social,
          familyDetails: {
            ...state.social.familyDetails,
            familySupport: {
              ...state.social.familyDetails.familySupport,
              livingOnStreet: action.payload,
            },
          },
        },
      };
    case 'FAMILY_DETAILS_FAMILY_SUPPORT_SUPPORT_PERSON':
      return {
        ...state,
        social: {
          ...state.social,
          familyDetails: {
            ...state.social.familyDetails,
            familySupport: {
              ...state.social.familyDetails.familySupport,
              supportPerson: action.payload,
            },
          },
        },
      };
    case 'FAMILY_DETAILS_FAMILY_SUPPORT_RELATION_OF_PATIENT':
      return {
        ...state,
        social: {
          ...state.social,
          familyDetails: {
            ...state.social.familyDetails,
            familySupport: {
              ...state.social.familyDetails.familySupport,
              relationOfPatient: action.payload,
            },
          },
        },
      };

    // form 3
    case 'LEGAL_AND_FINANCES_EMPLOYED':
      return {
        ...state,
        legalAndFinances: {
          ...state.legalAndFinances,
          employed: action.payload,
        },
      };
    case 'LEGAL_AND_FINANCES_LAID_OFF':
      return {
        ...state,
        legalAndFinances: {
          ...state.legalAndFinances,
          laidOff: action.payload,
        },
      };
    case 'LEGAL_AND_FINANCES_EVER_RESIGNED':
      return {
        ...state,
        legalAndFinances: {
          ...state.legalAndFinances,
          everResigned: action.payload,
        },
      };
    case 'LEGAL_AND_FINANCES_IS_HEALTH_ENSURED':
      return {
        ...state,
        legalAndFinances: {
          ...state.legalAndFinances,
          isHealthEnsured: action.payload,
        },
      };
    case 'LEGAL_AND_FINANCES_SATISFIED_WITH_JOB':
      return {
        ...state,
        legalAndFinances: {
          ...state.legalAndFinances,
          satisfiedWithJob: action.payload,
        },
      };
    case 'LEGAL_AND_FINANCES_OCCUPATION_HISTORY':
      return {
        ...state,
        legalAndFinances: {
          ...state.legalAndFinances,
          occupationHistory: {
            ...state.legalAndFinances.occupationHistory,
            employed: action.payload,
          },
        },
      };
    case 'LEGAL_AND_FINANCES_OCCUPATION_HISTORY_EMPLOYED':
      return {
        ...state,
        legalAndFinances: {
          ...state.legalAndFinances,
          occupationHistory: {
            ...state.legalAndFinances.occupationHistory,
            employed: action.payload,
          },
        },
      };
    case 'LEGAL_AND_FINANCES_OCCUPATION_HISTORY_LAID_OFF':
      return {
        ...state,
        legalAndFinances: {
          ...state.legalAndFinances,
          occupationHistory: {
            ...state.legalAndFinances.occupationHistory,
            laidOff: action.payload,
          },
        },
      };
    case 'LEGAL_AND_FINANCES_OCCUPATION_HISTORY_EVER_RESIGNED':
      return {
        ...state,
        legalAndFinances: {
          ...state.legalAndFinances,
          occupationHistory: {
            ...state.legalAndFinances.occupationHistory,
            everResigned: action.payload,
          },
        },
      };
    case 'LEGAL_AND_FINANCES_OCCUPATION_HISTORY_IS_HEALTH_ENSURED':
      return {
        ...state,
        legalAndFinances: {
          ...state.legalAndFinances,
          occupationHistory: {
            ...state.legalAndFinances.occupationHistory,
            isHealthEnsured: action.payload,
          },
        },
      };
    case 'LEGAL_AND_FINANCES_OCCUPATION_HISTORY_ SATISFIED_WITH_JOB':
      return {
        ...state,
        legalAndFinances: {
          ...state.legalAndFinances,
          occupationHistory: {
            ...state.legalAndFinances.occupationHistory,
            satisfiedWithJob: action.payload,
          },
        },
      };
    case 'LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_TYPE_OF_WORK':
      return {
        ...state,
        legalAndFinances: {
          ...state.legalAndFinances,
          occupationalDamage: {
            ...state.legalAndFinances.occupationalDamage,
            typeOfWork: action.payload,
          },
        },
      };
    case 'LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_UNEMPLOYED_PERIOD':
      return {
        ...state,
        legalAndFinances: {
          ...state.legalAndFinances,
          occupationalDamage: {
            ...state.legalAndFinances.occupationalDamage,
            unEmployedPeriod: action.payload,
          },
        },
      };
    case 'LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_REASON_OF_UNEMPLOYMENT':
      return {
        ...state,
        legalAndFinances: {
          ...state.legalAndFinances,
          occupationalDamage: {
            ...state.legalAndFinances.occupationalDamage,
            reasonOfUnemployment: action.payload,
          },
        },
      };
    case 'LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_DISCIPLINARY_ACTION_BOOL':
      return {
        ...state,
        legalAndFinances: {
          ...state.legalAndFinances,
          occupationalDamage: {
            ...state.legalAndFinances.occupationalDamage,
            disciplinaryAction: {
              ...state.legalAndFinances.occupationalDamage.disciplinaryAction,
              bool: action.payload,
            },
          },
        },
      };
    case 'LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_ABSTENEEISM':
      return {
        ...state,
        legalAndFinances: {
          ...state.legalAndFinances,
          occupationalDamage: {
            ...state.legalAndFinances.occupationalDamage,
            disciplinaryAction: {
              ...state.legalAndFinances.occupationalDamage.disciplinaryAction,
              details: {
                ...state.legalAndFinances.occupationalDamage.disciplinaryAction
                  .action,
                absteneeism: action.payload,
              },
            },
          },
        },
      };
    case 'LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_WARNING_OR_MEMOS':
      return {
        ...state,
        legalAndFinances: {
          ...state.legalAndFinances,
          occupationalDamage: {
            ...state.legalAndFinances.occupationalDamage,
            disciplinaryAction: {
              ...state.legalAndFinances.occupationalDamage.disciplinaryAction,
              details: {
                ...state.legalAndFinances.occupationalDamage.disciplinaryAction
                  .action,
                warningOrMemos: action.payload,
              },
            },
          },
        },
      };
    case 'LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_SUSPENSION_ORDER':
      return {
        ...state,
        legalAndFinances: {
          ...state.legalAndFinances,
          occupationalDamage: {
            ...state.legalAndFinances.occupationalDamage,
            disciplinaryAction: {
              ...state.legalAndFinances.occupationalDamage.disciplinaryAction,
              details: {
                ...state.legalAndFinances.occupationalDamage.disciplinaryAction
                  .action,
                suspentionOrder: action.payload,
              },
            },
          },
        },
      };
    case 'LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_DISMISSAL_ORDER':
      return {
        ...state,
        legalAndFinances: {
          ...state.legalAndFinances,
          occupationalDamage: {
            ...state.legalAndFinances.occupationalDamage,
            disciplinaryAction: {
              ...state.legalAndFinances.occupationalDamage.disciplinaryAction,
              details: {
                ...state.legalAndFinances.occupationalDamage.disciplinaryAction
                  .action,
                dismissalOrder: action.payload,
              },
            },
          },
        },
      };
    case 'LEGAL_AND_FINANCES_OCCUPATIONAL_DAMAGE_TRANSFER_ORDER':
      return {
        ...state,
        legalAndFinances: {
          ...state.legalAndFinances,
          occupationalDamage: {
            ...state.legalAndFinances.occupationalDamage,
            disciplinaryAction: {
              ...state.legalAndFinances.occupationalDamage.disciplinaryAction,
              details: {
                ...state.legalAndFinances.occupationalDamage.disciplinaryAction
                  .action,
                transferOrder: action.payload,
              },
            },
          },
        },
      };
    case 'LEGAL_AND_FINANCES_LEGAL_HISTORY_FOR_ARREST_SALES_OF_DRUG':
      return {
        ...state,
        legalAndFinances: {
          ...state.legalAndFinances,
          legalHistoryForArrest: {
            ...state.legalAndFinances.legalHistoryForArrest,
            salesOfDrug: action.payload,
          },
        },
      };
    case 'LEGAL_AND_FINANCES_LEGAL_HISTORY_FOR_ARREST_POSSISSION_OF_DRUG':
      return {
        ...state,
        legalAndFinances: {
          ...state.legalAndFinances,
          legalHistoryForArrest: {
            ...state.legalAndFinances.legalHistoryForArrest,
            possesionOfDrug: action.payload,
          },
        },
      };
    case 'LEGAL_AND_FINANCES_LEGAL_HISTORY_FOR_ARREST_DRUNK_INFLUENCED':
      return {
        ...state,
        legalAndFinances: {
          ...state.legalAndFinances,
          legalHistoryForArrest: {
            ...state.legalAndFinances.legalHistoryForArrest,
            drunkInfluenced: action.payload,
          },
        },
      };
    case 'LEGAL_AND_FINANCES_LEGAL_HISTORY_FOR_ARREST_DRUNK_AND_DRIVE':
      return {
        ...state,
        legalAndFinances: {
          ...state.legalAndFinances,
          legalHistoryForArrest: {
            ...state.legalAndFinances.legalHistoryForArrest,
            drunkAndDrive: action.payload,
          },
        },
      };
    case 'LEGAL_AND_FINANCES_LEGAL_HISTORY_FOR_ARREST_ACCIDENT_DRUNK_AND_DRIVE':
      return {
        ...state,
        legalAndFinances: {
          ...state.legalAndFinances,
          legalHistoryForArrest: {
            ...state.legalAndFinances.legalHistoryForArrest,
            accidentDrunkAndDrive: action.payload,
          },
        },
      };
    case 'LEGAL_AND_FINANCES_LEGAL_HISTORY_FOR_ARREST_ASSAULT':
      return {
        ...state,
        legalAndFinances: {
          ...state.legalAndFinances,
          legalHistoryForArrest: {
            ...state.legalAndFinances.legalHistoryForArrest,
            assult: action.payload,
          },
        },
      };
    case 'LEGAL_AND_FINANCES_LEGAL_HISTORY_FOR_ARREST_OTHER_REASON':
      return {
        ...state,
        legalAndFinances: {
          ...state.legalAndFinances,
          legalHistoryForArrest: {
            ...state.legalAndFinances.legalHistoryForArrest,
            otherReason: action.payload,
          },
        },
      };

    // form 4
    case 'TREATMENT_AND_GOALS_SHORT_TERM_GOALS_ABSTRAIN_ALCOHOL_AND_DRUGS_GOALS':
      return {
        ...state,
        tratmentAndGoals: {
          ...state.tratmentAndGoals,
          shortTermGoals: {
            ...state.tratmentAndGoals.shortTermGoals,
            abstrainAlcoholAndDrugs: {
              ...state.tratmentAndGoals.shortTermGoals.abstrainAlcoholAndDrugs,
              goals: action.payload,
            },
          },
        },
      };
    case 'TREATMENT_AND_GOALS_SHORT_TERM_GOALS_ABSTRAIN_ALCOHOL_AND_DRUGS_TIME_FRAME':
      return {
        ...state,
        tratmentAndGoals: {
          ...state.tratmentAndGoals,
          shortTermGoals: {
            ...state.tratmentAndGoals.shortTermGoals,
            abstrainAlcoholAndDrugs: {
              ...state.tratmentAndGoals.shortTermGoals.abstrainAlcoholAndDrugs,
              timeFrame: action.payload,
            },
          },
        },
      };
    case 'TREATMENT_AND_GOALS_SHORT_TERM_GOALS_BACK_TO_LIFE_GOALS':
      return {
        ...state,
        tratmentAndGoals: {
          ...state.tratmentAndGoals,
          shortTermGoals: {
            ...state.tratmentAndGoals.shortTermGoals,
            backToLife: {
              ...state.tratmentAndGoals.shortTermGoals.backToLife,
              goals: action.payload,
            },
          },
        },
      };
    case 'TREATMENT_AND_GOALS_SHORT_TERM_GOALS_BACK_TO_LIFE_TIME_FRAME':
      return {
        ...state,
        tratmentAndGoals: {
          ...state.tratmentAndGoals,
          shortTermGoals: {
            ...state.tratmentAndGoals.shortTermGoals,
            backToLife: {
              ...state.tratmentAndGoals.shortTermGoals.backToLife,
              timeFrame: action.payload,
            },
          },
        },
      };
    case 'TREATMENT_AND_GOALS_SHORT_TERM_GOALS_IMPROVED_WORK_LIFE_GOALS':
      return {
        ...state,
        tratmentAndGoals: {
          ...state.tratmentAndGoals,
          shortTermGoals: {
            ...state.tratmentAndGoals.shortTermGoals,
            improvedWorkLife: {
              ...state.tratmentAndGoals.shortTermGoals.improvedWorkLife,
              goals: action.payload,
            },
          },
        },
      };
    case 'TREATMENT_AND_GOALS_SHORT_TERM_GOALS_IMPROVED_WORK_LIFE_TIME_FRAME':
      return {
        ...state,
        tratmentAndGoals: {
          ...state.tratmentAndGoals,
          shortTermGoals: {
            ...state.tratmentAndGoals.shortTermGoals,
            improvedWorkLife: {
              ...state.tratmentAndGoals.shortTermGoals.improvedWorkLife,
              timeFrame: action.payload,
            },
          },
        },
      };
    case 'TREATMENT_AND_GOALS_LONG_TERM_GOALS_MANAGE_FINANCES_GOALS':
      return {
        ...state,
        tratmentAndGoals: {
          ...state.tratmentAndGoals,
          longTermGoals: {
            ...state.tratmentAndGoals.longTermGoals,
            manageFinances: {
              ...state.tratmentAndGoals.longTermGoals.manageFinances,
              goals: action.payload,
            },
          },
        },
      };
    case 'TREATMENT_AND_GOALS_LONG_TERM_GOALS_MANAGE_FINANCES_TIME_FRAME':
      return {
        ...state,
        tratmentAndGoals: {
          ...state.tratmentAndGoals,
          longTermGoals: {
            ...state.tratmentAndGoals.longTermGoals,
            manageFinances: {
              ...state.tratmentAndGoals.longTermGoals.manageFinances,
              timeFrame: action.payload,
            },
          },
        },
      };
    case 'TREATMENT_AND_GOALS_LONG_TERM_GOALS_DEAL_WITH_DEFECT_CHARACTERS_GOALS':
      return {
        ...state,
        tratmentAndGoals: {
          ...state.tratmentAndGoals,
          longTermGoals: {
            ...state.tratmentAndGoals.longTermGoals,
            dealWithDefectCharacters: {
              ...state.tratmentAndGoals.longTermGoals.dealWithDefectCharacters,
              goals: action.payload,
            },
          },
        },
      };
    case 'TREATMENT_AND_GOALS_LONG_TERM_GOALS_DEAL_WITH_DEFECT_CHARACTERS_TIME_FRAME':
      return {
        ...state,
        tratmentAndGoals: {
          ...state.tratmentAndGoals,
          longTermGoals: {
            ...state.tratmentAndGoals.longTermGoals,
            dealWithDefectCharacters: {
              ...state.tratmentAndGoals.longTermGoals.dealWithDefectCharacters,
              timeFrame: action.payload,
            },
          },
        },
      };
    case 'TREATMENT_AND_GOALS_LONG_TERM_GOALS_FAMILY_RELATION_GOALS':
      return {
        ...state,
        tratmentAndGoals: {
          ...state.tratmentAndGoals,
          longTermGoals: {
            ...state.tratmentAndGoals.longTermGoals,
            familyRelation: {
              ...state.tratmentAndGoals.longTermGoals.familyRelation,
              goals: action.payload,
            },
          },
        },
      };
    case 'TREATMENT_AND_GOALS_LONG_TERM_GOALS_FAMILY_RELATION_TIME_FRAME':
      return {
        ...state,
        tratmentAndGoals: {
          ...state.tratmentAndGoals,
          longTermGoals: {
            ...state.tratmentAndGoals.longTermGoals,
            familyRelation: {
              ...state.tratmentAndGoals.longTermGoals.familyRelation,
              timeFrame: action.payload,
            },
          },
        },
      };

    case 'TREATMENT_AND_GOALS_LONG_TERM_GOALS_RECREATIONAL_ACTIVITIES_GOALS':
      return {
        ...state,
        tratmentAndGoals: {
          ...state.tratmentAndGoals,
          longTermGoals: {
            ...state.tratmentAndGoals.longTermGoals,
            recreationalActivities: {
              ...state.tratmentAndGoals.longTermGoals.recreationalActivities,
              goals: action.payload,
            },
          },
        },
      };
    case 'TREATMENT_AND_GOALS_LONG_TERM_GOALS_RECREATIONAL_ACTIVITIES_TIME_FRAME':
      return {
        ...state,
        tratmentAndGoals: {
          ...state.tratmentAndGoals,
          longTermGoals: {
            ...state.tratmentAndGoals.longTermGoals,
            recreationalActivities: {
              ...state.tratmentAndGoals.longTermGoals.recreationalActivities,
              timeFrame: action.payload,
            },
          },
        },
      };

    case 'TREATMENT_AND_GOALS_FOLLOW_UP_MEASURES_DEALING_WITH_RELAPSES':
      return {
        ...state,
        tratmentAndGoals: {
          ...state.tratmentAndGoals,
          longTermGoals: {
            ...state.tratmentAndGoals.longTermGoals,
            dealingRelapses:action.payload
            
          },
        },
      };
    case 'TREATMENT_AND_GOALS_FOLLOW_UP_MEASURES_EXTENTION_DETAILS_COUNCELLORS_NAME':
      return {
        ...state,
        tratmentAndGoals: {
          ...state.tratmentAndGoals,
          followUPMeasures: {
            ...state.tratmentAndGoals.followUPMeasures,
            extentionDetails: {
              ...state.tratmentAndGoals.followUPMeasures.extentionDetails,
              councellorsName: action.payload,
            },
          },
        },
      };

    case 'TREATMENT_AND_GOALS_FOLLOW_UP_MEASURES_EXTENTION_DETAILS_DATE_OF_ADMISSIONS':
      return {
        ...state,
        tratmentAndGoals: {
          ...state.tratmentAndGoals,
          followUPMeasures: {
            ...state.tratmentAndGoals.followUPMeasures,
            extentionDetails: {
              ...state.tratmentAndGoals.followUPMeasures.extentionDetails,
              DateOfAdmissions: action.payload,
            },
          },
        },
      };

    case 'TREATMENT_AND_GOALS_FOLLOW_UP_MEASURES_EXTENTION_DETAILS_DISCHARGE':
      return {
        ...state,
        tratmentAndGoals: {
          ...state.tratmentAndGoals,
          followUPMeasures: {
            ...state.tratmentAndGoals.followUPMeasures,
            extentionDetails: {
              ...state.tratmentAndGoals.followUPMeasures.extentionDetails,
              discharge: action.payload,
            },
          },
        },
      };

    case 'TREATMENT_AND_GOALS_FOLLOW_UP_MEASURES_FOLLOW_UP_DETAILS_DATE':
      return {
        ...state,
        tratmentAndGoals: {
          ...state.tratmentAndGoals,
          followUPMeasures: {
            ...state.tratmentAndGoals.followUPMeasures,
            followUpDetails: {
              ...state.tratmentAndGoals.followUPMeasures.followUpDetails,
              date: action.payload,
            },
          },
        },
      };
    case 'TREATMENT_AND_GOALS_FOLLOW_UP_MEASURES_FOLLOW_UP_DETAILS_ISSUE_DEALT_IN_COUNSELING':
      return {
        ...state,
        tratmentAndGoals: {
          ...state.tratmentAndGoals,
          followUPMeasures: {
            ...state.tratmentAndGoals.followUPMeasures,
            followUpDetails: {
              ...state.tratmentAndGoals.followUPMeasures.followUpDetails,
              issueDealtInCounseling: action.payload,
            },
          },
        },
      };
    case 'TREATMENT_AND_GOALS_FOLLOW_UP_MEASURES_FOLLOW_UP_DETAILS_RECOVERY_STATUS':
      return {
        ...state,
        tratmentAndGoals: {
          ...state.tratmentAndGoals,
          followUPMeasures: {
            ...state.tratmentAndGoals.followUPMeasures,
            followUpDetails: {
              ...state.tratmentAndGoals.followUPMeasures.followUpDetails,
              recoverySatus: action.payload,
            },
          },
        },
      };

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

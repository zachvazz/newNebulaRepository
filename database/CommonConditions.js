import AsyncStorage from "@react-native-community/async-storage";

export const getCommonConditions = async () => {
  try {
    let stringifiedConditions = await AsyncStorage.getItem("CommonConditions");
    let conditions = JSON.parse(stringifiedConditions);
    return conditions;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const setCommonConditions = async () => {
  try {
    await AsyncStorage.removeItem("CommonConditions");
    let conditions = [
      {
        title: "LumbarConditions",
        content: "This is the Lumbar Conditions page.",
      },
      {
        title: "AnkleConditions",
        content: "This is the Ankle Conditions page.",
      },
      {
        title: "KneeConditions",
        content: "This is the Knee Conditions page.",
      },
      {
        title: "ShoulderConditions",
        content: "This is the Shoulder Conditions page.",
      },
      {
        title: "SpineConditions",
        content: "This is the Spine Conditions page.",
      },
      {
        title: "WristHandConditions",
        content: "This is the Wrist/Hand Conditions page.",
      },
    ];
    await AsyncStorage.setItem("CommonConditions", JSON.stringify(conditions));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

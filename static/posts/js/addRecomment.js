const addRecoment = (pk) => {
  const targetButton = document.querySelector(".jsTargetRecommentButton");
  const submitBox = document.querySelector("#id_body");
  if (targetButton.classList.contains("jsAddtargeting")) {
    targetButton.classList.remove("jsAddtargeting");
    targetButton.innerText = "답글 쓰기";
    submitBox.classList.remove("set_border_brown");
  } else {
    targetButton.classList.add("jsAddtargeting");
    targetButton.innerText = "답글중";
    submitBox.classList.add("set_border_brown");
  }
};

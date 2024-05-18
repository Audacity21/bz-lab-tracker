const filterLabStudent = () => {
  let allStudent = JSON.parse(localStorage.getItem("allData") || "[]");
  let ls = JSON.parse(localStorage.getItem("labStudent") || "[]");
  let filteredStudent = [];
  for (let i = 0; i < allStudent.length; i++) {
    for (let j = 0; j < ls.length; j++) {
      if (allStudent[i].USERNAME === ls[j]) {
        filteredStudent.push(allStudent[i]);
        break;
      }
    }
  }
  localStorage.setItem("fileData", JSON.stringify(filteredStudent));
  window.location.reload();
};

const filterAbsent = () => {
  let absentStudent = JSON.parse(localStorage.getItem("absent") || "[]");
  let data = JSON.parse(localStorage.getItem("fileData") || "[]");
  let temp = [];
  for (let i = 0; i < data.length; i++) {
    let flag = 0;
    for (let j = 0; j < absentStudent.length; j++) {
      if (absentStudent[j] === data[i].USERNAME) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      temp.push(data[i]);
    }
  }
  localStorage.setItem("fileData", JSON.stringify(temp));
  window.location.reload();
};

const filterAllDataWithPresentData = () => {
  let allData = JSON.parse(localStorage.getItem("allData") || "[]");
  let presentData = JSON.parse(localStorage.getItem("fileData") || "[]");
  let temp = [];
  for (let i = 0; i < allData.length; i++) {
    for (let j = 0; j < presentData.length; j++) {
      if (allData[i].USERNAME === presentData[j].USERNAME) {
        temp.push(allData[i]);
      }
    }
  }
  localStorage.setItem("fileData", JSON.stringify(temp));
  window.location.reload();
};
export { filterAbsent, filterLabStudent, filterAllDataWithPresentData };

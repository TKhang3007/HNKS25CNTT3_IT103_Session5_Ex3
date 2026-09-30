const rawSchedule = "BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302";

// Tách chuỗi thành các phần
const scheduleParts = rawSchedule.split("-");

// Lấy thông tin bác sĩ
let doctorName = scheduleParts[0];

// Bỏ tiền tố "BS."
doctorName = doctorName.replace("BS.", "");

// Đổi dấu "_" thành dấu cách
doctorName = doctorName.replaceAll("_", " ");

// Viết thường toàn bộ trước khi viết hoa chữ cái đầu
doctorName = doctorName.toLowerCase();

// Viết hoa chữ cái đầu của từng từ
const doctorWords = doctorName.split(" ");

for (let i = 0; i < doctorWords.length; i++) {
    doctorWords[i] =
        doctorWords[i].slice(0, 1).toUpperCase() +
        doctorWords[i].slice(1);
}

doctorName = doctorWords.join(" ");

// Chuẩn hóa chuyên khoa
let department = scheduleParts[1];
department = department.replaceAll("_", " ").toLowerCase();

const departmentWords = department.split(" ");

for (let i = 0; i < departmentWords.length; i++) {
    departmentWords[i] =
        departmentWords[i].slice(0, 1).toUpperCase() +
        departmentWords[i].slice(1);
}

department = departmentWords.join(" ");

// Lấy giờ khám
const examinationTime = scheduleParts[2];

// Chuẩn hóa phòng khám
let room = scheduleParts[3];
room = room.replace("PHONG_", "Phòng ");

// In bảng phân công
console.log(`
========================================
       PHÂN CÔNG CA KHÁM
========================================
Bác sĩ       : ${doctorName}
Chuyên khoa  : ${department}
Giờ khám     : ${examinationTime}
Phòng khám   : ${room}
========================================
`);
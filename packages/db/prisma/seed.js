const { PrismaClient } = require('./generated/client');
const { faker } = require('@faker-js/faker');
const prisma = new PrismaClient();

async function main() {
  try {
    // Create roles
    const rolesData = [
      { name: "Teacher" },
      { name: "Student" },
      { name: "Admin" }
    ];

    for (const roleData of rolesData) {
      await prisma.role.create({ data: roleData });
    }

    // Retrieve roles
    const roles = await prisma.role.findMany();

    // Check if roles are created successfully
    if (!roles || roles.length !== 3) {
      throw new Error("Failed to create roles or unexpected number of roles created.");
    }

    // Generate users
    const teachersData = Array.from({ length: 10 }, () => ({
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      roleId: roles.find(role => role.name === "Teacher").id
    }));

    const studentsData = Array.from({ length: 300 }, () => ({
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      roleId: roles.find(role => role.name === "Student").id
    }));

    const adminsData = [
      { username: "admin1", email: "admin1@example.com", password: "password", roleId: roles.find(role => role.name === "Admin").id },
      { username: "admin2", email: "admin2@example.com", password: "password", roleId: roles.find(role => role.name === "Admin").id }
    ];

    // Create users in database
    const usersData = [...teachersData, ...studentsData, ...adminsData];

    for (const userData of usersData) {
      await prisma.user.create({ data: userData });
    }

    // Retrieve created users
    const users = await prisma.user.findMany();

    // Create teacher records
    const teacherRecords = users
      .filter(user => user.roleId === roles.find(role => role.name === "Teacher").id)
      .map(user => ({ userId: user.id }));

    for (const teacherRecord of teacherRecords) {
      await prisma.teacher.create({ data: teacherRecord });
    }

    // Create classes
    const classData = Array.from({ length: 10 }, (_, i) => ({
      name: `Class ${i + 1}`,
      teacherId: teacherRecords[i % teacherRecords.length].userId
    }));

    for (const cls of classData) {
      await prisma.cls.create({ data: cls });
    }

    const classes = await prisma.cls.findMany();

    // Assign students to classes
    let studentAssignments = [];
    studentsData.forEach((student, index) => {
      const classId = classes[index % classes.length].id;
      studentAssignments.push({
        userId: users.find(user => user.email === student.email).id,
        classId: classId
      });
    });

    for (const studentAssignment of studentAssignments) {
      await prisma.student.create({ data: studentAssignment });
    }

    const createdStudents = await prisma.student.findMany();

    // Define realistic reasons for absences and lateness
    const absenceReasons = [
      "Absent due to health issues",
      "Family emergency",
      "Travel",
      "Religious observance",
      "Personal reasons"
    ];

    const lateReasons = [
      "School bus got late",
      "Traffic jam",
      "Missed the bus",
      "Overslept",
      "Unexpected delay at home"
    ];

    // Create registers and attendance records for the last 30 days
    for (const cls of classes) {
      for (let i = 0; i < 30; i++) {
        const date = new Date();
        date.setDate(date.getDate() - i);

        // Create register for the class
        const register = await prisma.register.create({
          data: {
            classId: cls.id,
            teacherId: cls.teacherId,
            date: date
          }
        });

        // Get students for the class
        const studentsForClass = createdStudents.filter(student => student.classId === cls.id);

        // Create attendance records for students in the class
        const attendanceData = studentsForClass.map(student => {
          const status = faker.helpers.arrayElement(["present", "absent", "late"]);
          const attendanceRecord = {
            studentId: student.id,
            registerId: register.id,
            status: status,
            date: date
          };
          if (status === "absent") {
            attendanceRecord.comment = faker.helpers.arrayElement(absenceReasons);
          }
          if (status === "late") {
            attendanceRecord.comment = faker.helpers.arrayElement(lateReasons);
            attendanceRecord.lateMinutes = faker.datatype.number({ min: 1, max: 60 });
          }
          return attendanceRecord;
        });

        await prisma.attendance.createMany({ data: attendanceData });
      }
    }

    console.log("Sample seed data created successfully.");
  } catch (error) {
    console.error("Error creating sample seed data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();

'use client'
import dynamic from 'next/dynamic';

console.log("hello there")
const AttendancePie = dynamic(() => import('./clients/AttendancePie').then(mod => mod.AttendancePie), { ssr: false });
export {AttendancePie}

const AttendancePattern = dynamic(() => import('./clients/AttendancePattern').then(mod => mod.AttendancePattern), { ssr: false });
export {AttendancePattern}


const StudentProfile = dynamic(() => import('./ai-tools/StudentProfile').then(mod => mod.StudentProfile), { ssr: false });
export {StudentProfile}
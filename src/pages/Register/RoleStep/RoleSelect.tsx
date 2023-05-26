import teacher from '../../../assets/image/teacher.png';
import student from '../../../assets/image/student.png';
import { RoleOption } from './RoleOption';
import { Role } from '../../../models/Role';
import { useState } from 'react';

export function RoleSelect() {

    const [role, setRole] = useState(Role.TEACHER);

    return (
        <div className="role__select">
            <RoleOption
                text={'Teacher'}
                isActive={role === Role.TEACHER}
                onClick={() => setRole(Role.TEACHER)}
                src={teacher}
                alt='teacher' />
            <RoleOption
                text={'Student'}
                isActive={role === Role.STUDENT}
                onClick={() => setRole(Role.STUDENT)}
                src={student}
                alt='student'
            />
        </div>
    );
}
export const Practices = () => {
    let students = [1,6];
    return (
        <>
            <p>{!students.length && "No students found"}</p>
            <p>No of students: {students.length}</p>
        </>
    )
}
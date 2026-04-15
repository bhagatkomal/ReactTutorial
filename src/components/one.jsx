export const One = () => {

     const data = {
        "students": [
          { "id": 1, "name": "Alice", "score": 85 },
          { "id": 2, "name": "Bob", "score": 92 },
          { "id": 3, "name": "Charlie", "score": 78 },
          { "id": 4, "name": "David", "score": 95 }
        ]
      };

    // function scoredStudets(){
    //     array.forEach(JSON.parse(data) => {
    //         console.log(data.students.name);
    //     });
    //     // if(score > 90){
    //     //     return "Komal";
    //     // }
    // }

    // scoredStudets();
   

    return(
        <>
            <div>
            <h1>List of students</h1>
                <ul>
                {data.students.map((student) => (
                    
                <li key={student.id}>
                    {student.name} — Score: {student.score} {student.score > 70 ? "dist" : ""}
                </li>
                ))}
                </ul>
            </div>
        </>
    )
}


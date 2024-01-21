
import React, { useState } from 'react';
import './style.css';

function ContactUs() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [regNo, setRegNo] = useState('');
  const [time, setTime] = useState('19:30'); // Default time

  

  const addStudent = () => {
    if (name.trim() === '' || regNo.trim() === '') {
      alert('Please enter valid data.');
      return;
    }

    setStudents([...students, { name, regNo, time }]);
    setName('');
    setRegNo('');
    setTime('19:30'); // Reset time to default after adding a student
  };

  const openNewTab = () => {
    const newTab = window.open('', '_blank');
    newTab.document.write(
      `<html>
	  <head>
	  <meta charset="utf-8" />
    <link rel="icon" href="logokits.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="KARUNYA INSTITUTE OF TECHNOLOGY AND SCIENCES"
      content="Web site created to generatepdf of permission letter"
    />
	  <title>KARUNYA UNIVERSITY</title>
	  </head>
	  <body>

	  <header><img src="logo.png" 
	  style="display: flex; justify-content: center; 
	  align-items: center;
	   max-width: 50%;height: auto;margin: 0 auto;
	   width: 100rem;max-height: 150px;">
	   </header>
	   <hr style="height: 4.5px;
	   background-color: rgb(196, 5, 5);">
<h1 style="text-align:center; padding-top: 1rem;">PERMISSION LETTER</h1>

	   <div     style="padding-left: 7rem; padding-top: 5rem;">
		<h2>Head CTC/KIDS,<br> Karunya Institute of Technology and Sciences.</h2>
		<h3>TO</h3>
		<h2>The Chief Warden (Boys Hostel),<br> Karunya Institute of Technology and Science, <br> Coimbatore-641114
		</h2>
		<h3>Subject</h3>
		<h2>Re: Permission for late residence entry
		<br> Respected Sir, <br><br> <br> <br>  The following students were working late at CTC. <br> 
		</h2>
		</div>

	  <h1 style="padding-top:3rem; text-align:center">STUDENT DETAILS</h1>
	  
	  <table border="1" style="width: 80%;height:3.8rem ;margin: 20px auto;font-size: 25px; font-weight: 10px;">
	  <thead><tr><th>Name</th><th>Registration No</th><th>Time</th></tr></thead><tbody>
	  ${students
        .map(
          (student) =>
            `<tr key="${student.name + student.regNo}">
			<td>${student.name}</td>
			<td>${student.regNo}</td>
			<td>${student.time}</td>
			</tr>`
        )
        .join('')}</tbody>
		</table >
		<div     style="padding-left: 7rem; padding-top: 5rem;padding-bottom: 20rem;">
		<h2>Kindly permit them to enter the hostel. </h2><br><br><br><br><br><br><br><br><br><br><br>
		<h2 >THANK YOU   <span style="padding-left: 70%; ">(HOD CTC/KIDS)</span></h2>
		
		</div>
		<br><br>
		</body>
		</html>`
    );
    newTab.document.close();
  };

  return (
    <div className="App" >
      <h1>STUDENT DETAILS</h1>
	  <br></br>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Registration No:
          <input type="text" value={regNo} onChange={(e) => setRegNo(e.target.value)} />
        </label>
        <label>
          Select Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <button type="button" onClick={addStudent}>
          Add Student
        </button>
      </form><br></br><br></br><br></br><br></br>
      {students.length > 0 && (
        <div>
          <h2>Entered Student Data</h2>
          <table border="1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Registration No</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.name + student.regNo}>
                  <td>{student.name}</td>
                  <td>{student.regNo}</td>
                  <td>{student.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" onClick={openNewTab}>
            NEXT
          </button>
        </div>
      )}
    </div>
  );
}

export default ContactUs;



import { createContext,useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext()

const EmployeeContextProvider = (props) => {

const[employees, setEmployees] = useState([
    {id: uuidv4(), name: 'Double-Boby', email:'doubleboby@mail.com', address:'89 Chiaroscuro Rd, Portland, USA',phone:'(171) 555-2222'},
    {id: uuidv4(), name: 'Hazel-Huffman', email:'Hazel-Huck@mail.com', address:'Obere Str. 57, Berlin, Germany', phone:'(313) 555-5735'},
    {id: uuidv4(), name: 'Frank-San Tucci', email:'ugly-thumb@mail.com', address:'25, rue Lauriston, Paris, France', phone:'(503) 555-9931'},
    {id: uuidv4(), name: 'Cortez-Kortez', email:'Gumby@mail.com', address:'C/ Araquil, 67, Madrid, Spain', phone:'(204) 619-5731'},
    {id: uuidv4(), name: 'Randy Rodella', email:'hey-randeeee@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone:'(204) 619-5731'}
])

const sortedEmployees = employees.sort((a,b)=>(a.name < b.name ? -1 : 1))

//add employee
const addEmployee = (name, email, address, phone) => {
    setEmployees([...employees , {id:uuidv4(), name, email, address, phone}])
}

//delete employee
const deleteEmployee = (id) => {
    
    setEmployees(employees.filter(employee => employee.id !== id))
    
}

const updateEmployee = (id, updatedEmployee)  => {
    setEmployees(employees.map((employee)=> employee.id === id ? updatedEmployee : employee))
    
}


    return(
        <EmployeeContext.Provider value={{sortedEmployees, addEmployee, deleteEmployee, updateEmployee}}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;
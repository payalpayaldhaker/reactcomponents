import React, { useState } from 'react'




import B from './B'
import C from './C'
import D from './D'
import E from './E'
import F from './F'
import G from './G'
import H from './H'
import K from './K'

        //Functional Compoent
function A() {
    
       
    const [x, setX] = useState(['At the secondary level, Edu-Kingdom English tutors build on the strong foundation laid down in'])
    const [y, setY] = useState(['the primary school English classes. Writing style becomes a primary emphasis. Our students are'])
    const [x1, setX1] = useState('encouraged to develop their voice when tackling a diverse range of writing assignments ranging ')
    const [x2, setX2] = useState('from news summaries to create interesting short stories. Our professional English tutoring')
    const [x3, setX3] = useState('services move beyond the basic question of whether a student writes “correctly” to whether student writes “well ...')
    const [x4, setX4] = useState('Find the job you want! All latest vacancies in India listed on Jobrapido™')

    const [x5, setX5] = useState('But if youre unable to find an affordable private Spanish tutor in Melbourne,')
    
    const [x7, setX7] = useState('online save travel costs, but you gain access to the best tutors from all over the world. Whilst students sometimes ...')
   

       

    return (
        <React.Fragment>
            
            <B name={x}/>
            <C address={y}/>
            <D tpye={x1}/>
            
            <E cast={x2}/>
            <F course={x3}/>
            <G std={x4}/>
            <H output={x5}/>
            <K input={x7}/> 
             
            
            
        </React.Fragment>
    )
}
export default A;



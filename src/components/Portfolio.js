import React from 'react';
import { ProjectCard } from './ProjectCard';

export const Portfolio=()=>{
    return (
        <div className="min-h-screen p-4 ">
            <div className="flex flex-wrap justify-around">
            <ProjectCard
            img={require('../assets/img/coldtrace-1.jpg')}
            title='ColdTrace'
            content='Application that connects to a peripheral via BLE
            (bluetooth low energy) and which offers the possibility of displaying and modifying the
            properties offered by the peripheral such as the different temperatures, the battery level,
            the different actuators, with time.'
            tags={['React native', 'Redux', 'RealmDB', 'Ble', 'Kitten UI']}
            />
            <ProjectCard
            img={require('../assets/img/phytair-1.jpg')}
            title='Phyt’air'
            content='Application that receives different
            meteorological information in real time via sensors installed at different locations
            by the customer and which serves as the basis for detailed statistics.'
            tags={['React native', 'Redux', 'Axios', 'Native base']}
            />
            <ProjectCard
            img={require('../assets/img/fcs-mob-1.png')}
            title='FCS'
            content='management application that let people schedule and monitor car maintenance.'
            tags={['React native', 'Redux', 'Axios', 'Kitten UI']}
            />
              <ProjectCard
            img={require('../assets/img/phytair-dash-1.png')}
            title="Pannel dashboard – Phyt'air "
            content='Application that receives different
            meteorological information in real time via sensors installed at different locations
            by the customer and which serves as the basis for detailed statistics.'
            tags={['React', 'Redux', 'Axios', 'Material UI']}
            />
                 <ProjectCard
            img={require('../assets/img/fcs-back-1.png')}
            title="Pannel dashboard – FCS"
            content='management application that let people schedule and monitor car maintenance.'
            tags={['React', 'Redux', 'Axios', 'Ant Design']}
            />
                <ProjectCard
            img={require('../assets/img/som-1.png')}
            title="S.O.M - SRM"
            content='Supplier and business relationship
            management platform as well as the management of various incidents in order to
            improve the supply mechanism.'
            tags={['Angular 8', 'RXJS', 'Axios', 'Angular Material']}
            /> 
              <ProjectCard
                img={require('../assets/img/evalos-1.png')}
            title="Evalos - ERP"
            content="A platform that offers the
            functionality necessary for the proper management of all the company's
            activities: employee management, adding objectives, evaluations, etc.."
            tags={['Angular 8', 'RXJS', 'Axios', 'Angular Material']}
            /> 
             <ProjectCard
            img={require('../assets/img/phyteau-1.jpg')}
            title="Phyt’eau"
            content="Intended for the agricultural sector in order to collect
            indicators thanks to the sensors installed at the customer, visualize this data in
            Dashboards, define via algorithms specific to each crop variety the exact dose of
            irrigation and its optimal planning."
            tags={['React native', 'Redux', 'Axios', 'Native base']}
            /> 
              <ProjectCard
              img={require('../assets/img/senya-1.png')}
            title="Senya"
            content="Hybrid mobile application for planning,
            management and monitoring of all farm activities."
            tags={['React native', 'Redux', 'Axios', 'Native base']}
            /> 
           </div>
        </div>
    )
}

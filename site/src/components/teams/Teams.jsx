import React from 'react'
import TechTeamDisplay from './TechTeam'
import VideoTeamDisplay from './VideoTeam'
import DesignTeamDisplay from './DesignTeam'
import SeniorTeamDisplay from './HelmTeam' 
import Tracing from './tracing'

const Team = () => {
  return (
     <div className='flex flex-col h-full bg-slate-900 pb-10'>

        <Tracing />
        <SeniorTeamDisplay />
        <TechTeamDisplay />
        <DesignTeamDisplay />
        <VideoTeamDisplay />
    </div>
    
  )
}   

export default Team
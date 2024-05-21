import { Suspense, createContext, useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Gltf, OrbitControls } from "@react-three/drei"
import Avatar from './components/Avatar'
import RowWithInputAndButton from './components/ui'

export const DataContext=createContext();

function App() {
  const [getTextMeg,setTextMeg] = useState('welcome to 3D world');
  const [getFileName,setFileName] = useState('welcome');
  const [getRoot,setRoot] = useState(null);
  const [getLepSyncJson,setLepSyncJson] = useState(null);
  const [getLepSyncSound,setLepSyncSound] = useState(null);


  return (
    <>
    <div className='ui-row'>
      <DataContext.Provider value={[getRoot,setRoot,getTextMeg,setTextMeg, getFileName,setFileName, getLepSyncJson,setLepSyncJson, getLepSyncSound,setLepSyncSound]}>
        <RowWithInputAndButton />
        <Canvas camera={{position:[0,0.99,4]}}>
          <OrbitControls enableZoom={false} />
          <directionalLight intensity={3.5} color={'white'} position={[-5,10,15]} />
          <Suspense fallback={null}>
            {/*<Gltf src='/model/white_hart_house.glb'/>*/}
              <Avatar />
          </Suspense>
        </Canvas>
      </DataContext.Provider>
    </div>
    </>
  )
}

export default App

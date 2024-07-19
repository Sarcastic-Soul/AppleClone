import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import Lights from "./Lights"
import { Suspense } from "react"
import IPhone from "./IPhone.jsx"
import * as THREE from 'three'
import Loader from "./Loader.jsx"

const ModelView = ({ index, groupRef, gsapType, contolRef, setRotationState, item, size }) => {
    return (
        <View
            index={index}
            id={gsapType}
            className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
        >
            <ambientLight intensity={0.3} />
            <PerspectiveCamera makeDefault position={[0, 0, 4]} />
            <Lights />
            <OrbitControls
                makeDefault
                ref={contolRef}
                enableZoom={false}
                enablePan={0.4}
                target={new THREE.Vector3(0, 0, 0)}
                onEnd={() => setRotationState(contolRef.current.getAzimuthalAngle())}
            />
            <group ref={groupRef} name={`${index === 1 ? 'small' : 'large'}`} position={[0, 0, 0]}>
                <Suspense fallback={<Loader />}>
                    <IPhone
                        scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
                        item={item}
                        size={size}
                    />
                </Suspense>
            </group>
        </View >
    )
}

export default ModelView
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useState, useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { FontLoader, GLTF, TextGeometry } from 'three-stdlib'
import HelvetikerFont from 'three/examples/fonts/helvetiker_regular.typeface.json';

type GLTFResult = GLTF & {
  nodes: {
    Plane014: THREE.Mesh
    Plane014_1: THREE.Mesh
    Plane014_2: THREE.Mesh
    badge001: THREE.Mesh
    badge002: THREE.Mesh
    badge003: THREE.Mesh
    badge004: THREE.Mesh
    badge005: THREE.Mesh
    nft: THREE.Mesh
    Plane002: THREE.Mesh
    QR: THREE.Mesh
    Text: THREE.Mesh
    Text001: THREE.Mesh
    Text002: THREE.Mesh
    Text004: THREE.Mesh
    Text005: THREE.Mesh
    Text007: THREE.Mesh
    Text008: THREE.Mesh
    Text009: THREE.Mesh
    Twitter_Logo: THREE.Mesh
    Facebook_Logo: THREE.Mesh
    instagram_base001: THREE.Mesh
    instagram_base001_1: THREE.Mesh
    group_A: THREE.Mesh
    group_B: THREE.Mesh
    group_C: THREE.Mesh
    Text003: THREE.Mesh
    Text010: THREE.Mesh
  }
  materials: {
    charcoal: THREE.MeshStandardMaterial
    blue: THREE.MeshStandardMaterial
    ['emit blue']: THREE.MeshStandardMaterial
    ['badge.001']: THREE.MeshStandardMaterial
    ['badge.002']: THREE.MeshStandardMaterial
    ['badge.003']: THREE.MeshStandardMaterial
    ['badge.004']: THREE.MeshStandardMaterial
    ['badge.005']: THREE.MeshStandardMaterial
    image: THREE.MeshStandardMaterial
    logo: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    green: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    ['SVGMat.004']: THREE.MeshStandardMaterial
    MI_instagram_base: THREE.MeshStandardMaterial
    MI_White_instagram: THREE.MeshStandardMaterial
    ['group A']: THREE.MeshStandardMaterial
    ['group B']: THREE.MeshStandardMaterial
    ['group C']: THREE.MeshStandardMaterial
  }
}

type ActionName = 'All Animations'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function Model(props) {
  const { domain, title } = props;
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/model.glb') as GLTFResult
  // const { actions } = useAnimations<GLTFActions>(animations, group)
  const [modelNodes, setModelNodes] = useState<any>();
  const [modelMaterials, setModelMaterials] = useState<any>();
  const [logoMeterial, setLogoMaterial] = useState<THREE.MeshStandardMaterial>();
  const [QRMeterial, setQRMaterial] = useState<THREE.MeshStandardMaterial>();
  const [avatarMeterial, setAvatarMaterial] = useState<THREE.MeshStandardMaterial>();

  useEffect(() => {
    setModelNodes(nodes)
    setModelMaterials(materials)

    var logoLoader =  new THREE.TextureLoader().load("/textures/logo.png");
    const logoMeterial = new THREE.MeshStandardMaterial()
    logoMeterial.map = logoLoader
    setLogoMaterial(logoMeterial)
    
    var QRLoader =  new THREE.TextureLoader().load("/textures/qr.jpg");
    const QRMeterial = new THREE.MeshStandardMaterial()
    QRMeterial.map = QRLoader
    setQRMaterial(QRMeterial)
  
    var avatarLoader =  new THREE.TextureLoader().load("/textures/img.jpg");
    const avatarMeterial = new THREE.MeshStandardMaterial()
    avatarMeterial.map = avatarLoader
    setAvatarMaterial(avatarMeterial)

  }, [])

  useEffect(() => {
    if (modelNodes) {
      // console.log("modelnodes", modelNodes)
      const loader = new FontLoader();
      loader.load('/fonts/optimer_bold.typeface.json', function (font) {
      let tempDomain = domain === null ? "" : domain
      const geometry = new TextGeometry(tempDomain, {
          font: font,
          size: 0.8,
          height: 0.1,
          curveSegments: 0.1,
        });
        const mat = new THREE.MeshStandardMaterial({color: "grey"})
        mat.needsUpdate = true
        setModelNodes({
          ...modelNodes,
          Text005: {
            ...modelNodes.Text005,
            geometry: geometry,
            material: mat
          }
        })
      });
    }
  }, [domain])

  useEffect(() => {
    if (modelNodes) {
      // console.log("modelnodes", modelNodes)
      const loader = new FontLoader();
      loader.load('/fonts/optimer_regular.typeface.json', function (font) {
      let tempTitle = title === null ? "" : title
      const geometry = new TextGeometry(tempTitle, {
          font: font,
          size: 0.8,
          height: 0.1,
          curveSegments: 0.1,
        });
        const mat = new THREE.MeshStandardMaterial({color: "grey"})
        mat.needsUpdate = true
        setModelNodes({
          ...modelNodes,
          Text004: {
            ...modelNodes.Text004,
            geometry: geometry,
            material: mat
          }
        })
      });
    }
  }, [title])

  return (
    <>
      {modelNodes && (
        <group ref={group} dispose={null}>
          <mesh geometry={nodes.Plane014.geometry} material={materials.charcoal} />
          <mesh geometry={nodes.Plane014_1.geometry} material={materials.blue} />
          <mesh geometry={nodes.Plane014_2.geometry} material={materials['emit blue']} />
          
          {/* profile avatar image */}
          <mesh geometry={nodes.nft.geometry} material={avatarMeterial} position={[3.2, -0.12, 0]} rotation={[0, Math.PI, Math.PI]} scale={[0.85, 0.85, 0.9]} />

          {/* logo image */}
          <mesh geometry={nodes.Plane002.geometry} material={logoMeterial} position={[-0.83, 1.77, 0.14]} rotation={[Math.PI / 2, 0, 0]} scale={0.88} />

          {/* QR code image */}
          <mesh geometry={nodes.QR.geometry} material={QRMeterial} position={[-4.65, 0.03, 0.1]} />

          {/* domain text */}
          <mesh geometry={modelNodes.Text005.geometry} material={modelNodes.Text005.material} position={[-2.5, -0.14, 0.07]} rotation={[0, 0, 0]} scale={0.4} />

          {/* title texts */}
          <mesh geometry={modelNodes.Text004.geometry} material={modelNodes.Text004.material} position={[-2.16, -1.45, 0.12]} rotation={[0, 0, 0]} scale={0.2} />
          {/* <mesh geometry={nodes.Text003.geometry} material={nodes.Text003.material} position={[-2.16, -1.65, 0.12]} rotation={[Math.PI / 2, 0, 0]} scale={0.2} />
          <mesh geometry={nodes.Text010.geometry} material={nodes.Text010.material} position={[-2.16, -1.85, 0.12]} rotation={[Math.PI / 2, 0, 0]} scale={0.2} /> */}

          {/* badge images */}
          <mesh geometry={nodes.badge001.geometry} material={materials['badge.001']} position={[-2.08, -2.55, 0.12]} rotation={[Math.PI / 2, 0, 0]} scale={0.16} />
          <mesh geometry={nodes.badge002.geometry} material={materials['badge.002']} position={[-1.48, -2.55, 0.12]} rotation={[Math.PI / 2, 0, 0]} scale={0.16} />
          <mesh geometry={nodes.badge003.geometry} material={materials['badge.003']} position={[-0.88, -2.55, 0.12]} rotation={[Math.PI / 2, 0, 0]} scale={0.16} />
          <mesh geometry={nodes.badge004.geometry} material={materials['badge.004']} position={[-0.28, -2.55, 0.12]} rotation={[Math.PI / 2, 0, 0]} scale={0.16} />
          <mesh geometry={nodes.badge005.geometry} material={materials['badge.005']} position={[0.32, -2.55, 0.12]} rotation={[Math.PI / 2, 0, 0]} scale={0.16} />

          {/* social links */}
          <mesh geometry={nodes.Twitter_Logo.geometry} material={materials['Material.001']} position={[-4.63, 2.1, 0.12]} rotation={[Math.PI / 2, 0, 0]} scale={2.42} />
          <mesh geometry={nodes.Facebook_Logo.geometry} material={materials['SVGMat.004']} position={[-4.63, 1.66, 0.12]} rotation={[Math.PI / 2, 0, 0]} scale={3.23} />
          <group position={[-4.63, 1.27, 0.12]} scale={3.01}>
            <mesh geometry={nodes.instagram_base001.geometry} material={materials.MI_instagram_base} />
            <mesh geometry={nodes.instagram_base001_1.geometry} material={materials.MI_White_instagram} />
          </group>

          {/* social texts */}
          <mesh geometry={nodes.Text.geometry} material={materials.green} position={[-4.42, 2.1, 0.12]} rotation={[Math.PI / 2, 0, 0]} scale={0.23} />
          <mesh geometry={nodes.Text001.geometry} material={materials.green} position={[-4.42, 1.66, 0.12]} rotation={[Math.PI / 2, 0, 0]} scale={0.23} />
          <mesh geometry={nodes.Text002.geometry} material={materials.green} position={[-4.42, 1.27, 0.12]} rotation={[Math.PI / 2, 0, 0]} scale={0.23} />

          {/* daos images */}
          <mesh geometry={nodes.group_A.geometry} material={materials['group A']} position={[-4.72, -1.29, 0.12]} rotation={[Math.PI / 2, 0, 0]} scale={[0.16, 0.09, 0.16]} />
          <mesh geometry={nodes.group_B.geometry} material={materials['group B']} position={[-4.72, -1.69, 0.12]} rotation={[Math.PI / 2, 0, 0]} scale={[0.16, 0.09, 0.16]} />
          <mesh geometry={nodes.group_C.geometry} material={materials['group C']} position={[-4.72, -2.09, 0.12]} rotation={[Math.PI / 2, 0, 0]} scale={[0.16, 0.09, 0.16]} />

          {/* daos texts */}
          <mesh geometry={nodes.Text007.geometry} material={materials.blue} position={[-4.42, -1.33, 0.12]} rotation={[Math.PI / 2, 0, 0]} scale={0.23} />          
          <mesh geometry={nodes.Text008.geometry} material={materials.green} position={[-4.42, -1.77, 0.12]} rotation={[Math.PI / 2, 0, 0]} scale={0.23} />
          <mesh geometry={nodes.Text009.geometry} material={materials.green} position={[-4.42, -2.16, 0.12]} rotation={[Math.PI / 2, 0, 0]} scale={0.23} />
        </group>
      )}
    </>
  )
}

useGLTF.preload('/model.glb')
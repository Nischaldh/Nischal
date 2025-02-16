import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations, useFBX } from '@react-three/drei';

const MyModel = (props) => {
    const group = useRef();
    const { nodes, materials } = useGLTF('/models/animations/MyModel.glb');

    // Load animations
    const saluteFBX = useFBX('/models/animations/salute.fbx');
    const idleFBX = useFBX('/models/animations/idle.fbx');
    const victoryFBX = useFBX('/models/animations/victory.fbx');

    // Name animations
    saluteFBX.animations[0].name = 'salute';
    idleFBX.animations[0].name = 'idle';
    victoryFBX.animations[0].name = 'victory';

    // Apply animations
    const { actions } = useAnimations(
        [...saluteFBX.animations, ...idleFBX.animations, ...victoryFBX.animations],
        group
    );

    useEffect(() => {
        if (!actions['salute'] || !actions['idle']) return;

        const saluteAction = actions['salute'];
        const idleAction = actions['idle'];

        // Play salute on page load
        saluteAction.reset().setLoop(1, 1).fadeIn(0.5).play();

        // Return to idle after salute finishes
        saluteAction.clampWhenFinished = true;
        saluteAction.getMixer().addEventListener('finished', () => {
            saluteAction.fadeOut(0.5);
            idleAction.reset().fadeIn(1).play();
        });

    }, [actions]);

    const playAnimation = (animationName) => {
        if (!actions[animationName] || !actions['idle']) return;

        const action = actions[animationName];
        const idleAction = actions['idle'];

        // Stop all other animations
        Object.values(actions).forEach((a) => a.stop());

        // Play the selected animation
        action.reset().setLoop(1, 1).fadeIn(0.5).play();

        // Return to idle after animation ends
        action.clampWhenFinished = true;
        action.getMixer().addEventListener('finished', () => {
            action.fadeOut(0.5);
            idleAction.reset().fadeIn(1).play();
        });
    };

    return (
        <group
            ref={group}
            {...props}
            dispose={null}
            onClick={() => playAnimation('salute')}          // Click → Salute
            onDoubleClick={() => playAnimation('victory')}   // Double Click → Victory
            onTouchEnd={() => playAnimation('salute')}       // Mobile Touch → Salute
        >
            <group name="Scene">
                <group name="Armature">
                    <primitive object={nodes.Hips} />
                    <skinnedMesh
                        name="avaturn_body"
                        geometry={nodes.avaturn_body.geometry}
                        material={materials.avaturn_body_material}
                        skeleton={nodes.avaturn_body.skeleton}
                    />
                    <skinnedMesh
                        name="avaturn_hair_0"
                        geometry={nodes.avaturn_hair_0.geometry}
                        material={materials.avaturn_hair_0_material}
                        skeleton={nodes.avaturn_hair_0.skeleton}
                    />
                    <skinnedMesh
                        name="avaturn_shoes_0"
                        geometry={nodes.avaturn_shoes_0.geometry}
                        material={materials.avaturn_shoes_0_material}
                        skeleton={nodes.avaturn_shoes_0.skeleton}
                    />
                    <skinnedMesh
                        name="avaturn_look_0"
                        geometry={nodes.avaturn_look_0.geometry}
                        material={materials.avaturn_look_0_material}
                        skeleton={nodes.avaturn_look_0.skeleton}
                    />
                </group>
            </group>
        </group>
    );
};

useGLTF.preload('/models/animations/MyModel.glb');
export default MyModel;

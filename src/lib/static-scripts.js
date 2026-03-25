// src/lib/static-scripts.js

function generateScript(mode, duration, prompt) {
  const isVedic = mode === 'vedic';

  const vedicStages = [
    {
      heading: '[Stage 1: Internalization — Pratyahara]',
      text: `Settle into your sacred space. Lie back in Savasana. Close your eyes. \n\nThe journey of Yoga Nidra begins by drawing the senses inward, like a tortoise withdrawing its limbs into its shell. \n\nFeel the weight of your physical body surrendering to the earth beneath you. Release the external world. Let sounds drift through you without resistance. You are stepping out of time, crossing the threshold from doing into being.`,
    },
    {
      heading: '[Stage 2: Sankalpa — The Sacred Vow]',
      text: `Bring your awareness to the heart space, the Anahata chakra. \n\nHere, in the fertile soil of your soul, we plant your Sankalpa, your sacred resolve. \n\nYou seek "${prompt}". Distill this into a short, positive statement in the present tense. \n\nRepeat it internally three times with absolute faith and conviction. This seed is now planted. Let it be.`,
    },
    {
      heading: '[Stage 3: Rotation of Consciousness]',
      text: `We now map the energy body, moving awareness swiftly through the Marma points. Do not overthink; simply follow my voice. \n\nRight hand thumb... second finger... third... fourth... fifth... palm of the hand... back of the hand... wrist... forearm... elbow... upper arm... shoulder... armpit... right waist... hip... thigh... knee... calf... ankle... heel... sole of the right foot... top of the foot... big toe... second toe... third... fourth... fifth.\n\nLeft hand thumb... second finger... third... fourth... fifth... palm... back of the hand... wrist... forearm... elbow... upper arm... shoulder... armpit... left waist... hip... thigh... knee... calf... ankle... heel... sole of the left foot... big toe... second toe... third... fourth... fifth.\n\nNow the back of the body... right shoulder blade... left shoulder blade... the entire spine... from base to neck. \n\nThe front of the body... top of the head... forehead... right eyebrow... left eyebrow... eyebrow center... right eye... left eye... right ear... left ear... right cheek... left cheek... nose... tip of the nose... upper lip... lower lip... chin... throat... right chest... left chest... center of the chest... navel... abdomen. \n\nThe whole right leg... the whole left leg... both legs together. The whole right arm... the whole left arm... both arms together. The whole back... the whole front... the whole head. \n\nThe entire body... the entire body... the entire physical vessel, awake in perfect stillness.`,
    },
    {
      heading: '[Stage 4: Breath Awareness — Prana Balancing]',
      text: `Gently draw your attention to the natural rhythm of your breath. Do not change it. Witness the cool air entering the nostrils, the warm air exiting. \n\nWe balance the solar and lunar channels. Feel the breath moving through the left nostril, the cooling Ida channel. Now the right nostril, the warming Pingala channel. \n\nAs you breathe, imagine the current of Prana flowing up and down the Sushumna, the central spine. With every inhalation, vital life force enters. With every exhalation, fatigue leaves the system.`,
    },
    {
      heading: '[Stage 5: Pairs of Opposites — Dvandva]',
      text: `Awaken the feeling of heaviness. The body feels so heavy it is sinking into the floor. The bones are made of lead. \n\nNow completely release that feeling. Awaken the sensation of lightness. The body is entirely weightless, like a feather drifting upwards in the breeze. \n\nNow, feel both heaviness and lightness simultaneously. \n\nObserve how the mind grasps at opposites. You are the Sakshi, the silent witness standing behind all sensation. The witness remains untouched by duality.`,
    },
    {
      heading: '[Stage 6: Visualization — The Inner Canvas]',
      text: `Drop all sensation. Bring your awareness to Chidakasha, the dark space behind your closed eyes. \n\nImagine a glowing Blue Lotus resting on the surface of a still, dark lake. The lotus opens its petals, one by one. \n\nAt the center lies a Golden Egg, the Hiranyagarbha, radiating eternal warmth. You are safe here. Any lingering Samskaras, karmic imprints or energetic knots, gently dissolve into this golden light. \n\nRest in the expansive void of the Vijnanamaya Kosha, the wisdom body.`,
    },
    {
      heading: '[Stage 7: Resolve — Re-planting the Seed]',
      text: `Return once more to the heart center. \n\nRemember the Sankalpa you planted at the beginning of this practice. It has been watered by your deep stillness. \n\nMentally repeat your resolve three more times. This intention is now vibrating at the deepest layer of your causal body. It is already done. It is already manifesting.`,
    },
    {
      heading: '[Stage 8: Return — Externalization]',
      text: `Slowly... very slowly... become aware of your breath again. \n\nBecome aware of the physical container of your body resting on the floor. Hear the sounds inside the room. Hear the sounds outside the room, far in the distance. \n\nYour Atman, your true self, remains undisturbed. \n\nGently invite micro-movements into your fingers and toes. When you feel completely ready, and not a moment before, gently open your eyes. The practice of Yoga Nidra is now complete.`,
    }
  ];

  const bioStages = [
    {
      heading: '[Stage 1: Internalization — System Disconnect]',
      text: `Initiate shutdown of the external interface. Lie back comfortably. Close your eyes. \n\nWe are systematically disconnecting from the algorithm of daily life. The sensory inputs, the notifications, the stimulus-response loops—let them all power down. \n\nYour Default Mode Network is quieting. You are reclaiming your attention. Give your system the strict command to enter standby mode.`,
    },
    {
      heading: '[Stage 2: Sankalpa — RAS Programming]',
      text: `Focus your attention on your prefrontal cortex, the CEO of the brain. \n\nWe must program your Reticular Activating System. Your defined query is: "${prompt}". \n\nDistill this into a single, actionable firmware instruction in the present tense. \n\nEcho this instruction in your mind three times. The filter is set. Your neural pathways will now flag this intention as primary.`,
    },
    {
      heading: '[Stage 3: Rotation of Consciousness — Hardware Audit]',
      text: `We will execute a rapid somatosensory cortex scan. Methodically shift your processing power to each region as I call it out. \n\nRight hand thumb... index finger... middle... ring... pinky... palm... back of hand... wrist... forearm... elbow... bicep... shoulder... right lateral waist... hip... thigh... knee... calf... ankle... heel... sole... top of foot... big toe... second... third... fourth... fifth. \n\nLeft hand thumb... index... middle... ring... pinky... palm... back of hand... wrist... forearm... elbow... bicep... shoulder... left lateral waist... hip... thigh... knee... calf... ankle... heel... sole... top of foot... big toe... second... third... fourth... fifth. \n\nPosterior chain... right scapula... left scapula... the entire spinal column from lumbar to cervical vertebrae. \n\nAnterior system... crown of the head... forehead... right orbit... left orbit... glabella (eyebrow center)... right eye... left eye... right ear... left ear... right cheek... left cheek... nasal bridge... apex of the nose... upper lip... lower lip... mandible... throat... right pectoral... left pectoral... sternum... abdomen. \n\nEntire right sequence. Entire left sequence. Bilateral sequence. Posterior. Anterior. \n\nBoot up full-body awareness. The biological hardware is perfectly offline, while consciousness remains perfectly online.`,
    },
    {
      heading: '[Stage 4: Breath Awareness — Vagal Stimulation]',
      text: `Shift analytical focus to respiratory cycles. Observe the autonomic breathing process without manual override. \n\nNotice the temperature gradient—cool on the intake, warm on the exhaust. \n\nWe are optimizing Heart Rate Variability (HRV). Each slow, rhythmic exhalation sends a direct signal down the Vagus nerve, instructing the parasympathetic nervous system to decrease cortisol output and initiate cellular recovery.`,
    },
    {
      heading: '[Stage 5: Pairs of Opposites — Neuroplasticity Protocol]',
      text: `Command the sensation of intense heaviness. Gravity is multiplying. Your mass is pulling you through the floor. \n\nTerminate that protocol. Initiate the sensation of weightlessness. Your density is zero. You are hovering above the surface. \n\nNow, run both protocols simultaneously. Feel completely heavy, and completely weightless at the exact same moment. \n\nNotice the cognitive dissonance. You are breaking rigid neural loops and forcing the brain into a highly plastic, adaptable state. You are the sovereign observer of the data, not the data itself.`,
    },
    {
      heading: '[Stage 6: Visualization — Cognitive Future-Casting]',
      text: `Clear the visual buffer. Focus on the blank screen behind your eyelids. \n\nWe enter the inner VR simulator. Your brain cannot distinguish between a vividly imagined event and a physical reality. \n\nProject a high-fidelity simulation of total systemic optimization. Visualize the exact state of clarity, healing, or focus you require. See the environmental details, feel the emotional resonance. \n\nThis is a moonshot for your interior architecture. The new neural connections are firing and wiring together right now.`,
    },
    {
      heading: '[Stage 7: Resolve — Firmware Update]',
      text: `Return your focus to the primary directive. \n\nRecall the RAS programming instruction you set at initialization. The operating environment is perfectly receptive. \n\nRepeat the directive three times. The hippocampus is actively encoding this data into your long-term behavioral models. The update is successfully installed.`,
    },
    {
      heading: '[Stage 8: Return — System Reboot]',
      text: `Prepare for system reboot. Gradually increase awareness of your respiratory data. \n\nExpand your radar to map your physical coordinates in the room. Analyze the acoustic environment. \n\nYour hardware is rested. Your operating system is upgraded. Your narrative is yours, and it is unhackable. \n\nSend micro-signals to your extremities—move fingers and toes. When the sequence is complete, bring the system fully online and open your eyes.`,
    }
  ];

  const stages = isVedic ? vedicStages : bioStages;
  let finalScript = '';

  stages.forEach((stage) => {
    finalScript += stage.heading + '\n';
    
    // For longer durations, we pad the text by explaining further or repeating.
    // Since the user said "doesn't need to be continuous", we just output the core scripts 
    // but scale the pauses or repetitive instructions.
    if (duration === 45) {
      finalScript += stage.text.replace(/\n\n/g, '\n\n... (Allow 3-5 minutes of profound silence for processing) ...\n\n');
    } else if (duration === 30) {
      finalScript += stage.text.replace(/\n\n/g, '\n\n... (Allow 2 minutes of silence) ...\n\n');
    } else {
      finalScript += stage.text.replace(/\n\n/g, '\n\n... \n\n');
    }
    
    finalScript += '\n\n---\n\n';
  });

  return finalScript.trim();
}

export { generateScript };

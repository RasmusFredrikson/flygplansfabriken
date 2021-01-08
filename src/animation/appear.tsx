import { motion } from 'framer-motion';
import React, {PropsWithChildren} from 'react';

export const Appear = ({children}: PropsWithChildren<any>) => (
  <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
    {children}
  </motion.div>
);

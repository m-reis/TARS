import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Slide } from '@mui/material';
import { forwardRef, ReactElement, Ref } from 'react';
import { TransitionProps } from '@mui/material/transitions';
import DialogProps from '@/models/props/iDialogProps';
import Image from 'next/image';
import { ArrowForwardIos } from '@mui/icons-material';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogDefault( { children, title ,opened, handleClose, size }: DialogProps ){
  return (
    <>
        <Dialog
            maxWidth={size}
            fullWidth={true}
            open={opened}
            slots={{ transition: Transition }}
            onClose={() =>  handleClose() }>

            <DialogTitle className='relative title-dialog bg-primary flex flex-row text-tertiary/60 p-3 text-sm items-center'>
                <Image className='mr-2' src="/logo/C logo.png" width={70} height={8} alt='Charm' />
                
                <ArrowForwardIos className='text-sm mr-2' />
                {title}
            </DialogTitle>

            <DialogContent className='p-1 bg-primary/30'>
                {children} 
            </DialogContent>
      </Dialog>
    </>
  );
}
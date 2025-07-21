import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Slide } from '@mui/material';
import { forwardRef, ReactElement, Ref } from 'react';
import { TransitionProps } from '@mui/material/transitions';
import DialogProps from '@/models/props/iDialogProps';

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
            onClose={() =>  handleClose() } >
        <DialogTitle>
            {title}
        </DialogTitle>
            <DialogContent>
                {children} 
            </DialogContent>
      </Dialog>
    </>
  );
}
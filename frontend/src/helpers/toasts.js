import Swal from 'sweetalert2'

export const useToast = ({
  position = 'bottom',
  timer = 2500,
  icon,
  title,
}) => {
  const Toast = Swal.mixin({
    toast: true,
    position,
    showConfirmButton: false,
    timer,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
  })

  Toast.fire({ icon, title })
}

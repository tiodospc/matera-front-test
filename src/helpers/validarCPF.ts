export default function validarCPF(cpf: string): boolean {
  if (!cpf) {
    console.error('CPF is undefined or null')
    return false
  }

  cpf = cpf.replace(/[^\d]+/g, '')

  if (cpf.length !== 11 || /^(0|1|2|3|4|5|6|7|8|9)\1{10}$/.test(cpf)) {
    return false
  }

  let add = 0

  for (let i = 0; i < 9; i++) {
    add += parseInt(cpf.charAt(i)) * (10 - i)
  }

  let rev = 11 - (add % 11)
  rev = rev >= 10 ? 0 : rev

  if (rev !== parseInt(cpf.charAt(9))) {
    return false
  }

  add = 0

  for (let i = 0; i < 10; i++) {
    add += parseInt(cpf.charAt(i)) * (11 - i)
  }

  rev = 11 - (add % 11)
  rev = rev >= 10 ? 0 : rev

  return rev === parseInt(cpf.charAt(10))
}

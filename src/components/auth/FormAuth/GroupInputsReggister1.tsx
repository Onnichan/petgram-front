export const GroupInputsReggister1 = ({ changeInputValues, inputValues }) => {
  return (
        <>
            <input
                    onChange={e => changeInputValues(e)}
                    name= "raza"
                    placeholder="Raza"
                    type="text"
                    value= {inputValues.raza}

                    className="content-form-auth__input"
                    />

                <input
                    className="content-form-auth__input"
                    name= "birthday"
                    placeholder="Fecha de nacimiento (dd/mm/yyyy)"
                    type="text"
                    value= {inputValues.birthday}
                    onChange={e => changeInputValues(e)}
                    onFocus={
                        (e) => {
                          e.currentTarget.type = 'date'
                          e.currentTarget.focus()
                        }
                    }
                />

                <input
                    onChange={e => changeInputValues(e)}
                    name= "phoneNumber"
                    placeholder="Número de teléfono (opcional)"
                    type="tel"
                    value= {inputValues.phoneNumber}
                    className="content-form-auth__input"
                />
        </>
  )
}

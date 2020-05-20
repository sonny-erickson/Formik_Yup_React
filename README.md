React _formik_yup
                                    10 steps for Formik !!


Step 1 -> npm install formik , yup
Step 2 -> import { Formik } from 'formik;
Step 3 -> in return :
                        <Formik>
                            {() => (
                                <form>

                                </form>
                            )}
                        </Formik>
Step 4 -> in form : (for each input: mail, name, password...)
                     <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control"></input>
                    </div>
Step 5 -> Create function submit = (values) =>{ clg(values) }

Step 6 -> in <Formik onSubmit={ this.submit }>

Step 7 -> Pass object inside 
    <Formik>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isSubmitting
        })
Step 8 -> And put for each input:

                <input name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} type="text" className="form-control"></input>


Step 9 -> add <form onSubmit={handleSubmit} className="d-flex flex-column p-5 border"> for the preventDefault
Step 10 -> and stay isSubmitting ! add in <button disabled={isSubmitting} 
                        for submit only one time. After submit the button became disabled
Step 11 -> to button add too type="submit"
Step 1 -> After you need to initial values. for that

     <Formik
        onSubmit={ this.submit }
        initialValues={{name:'', email:'', password: ''}}
      >

Step 1 -> 
Step 1 -> 
Step 1 -> 

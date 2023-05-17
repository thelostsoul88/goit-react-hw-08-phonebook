import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Controller, useForm } from "react-hook-form";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import { useAddContactsMutation, useGetContactsQuery } from "redux/contactsApi";
import { toast } from "react-hot-toast";

const Form = ({ close }) => {
  const { data: contacts = [] } = useGetContactsQuery();
  const [addContacts] = useAddContactsMutation();
  const handleSubmitForm = async ({ name, tel }) => {
    contacts.some((contact) => contact.number === tel)
      ? toast.error(`${tel} - already in contact`)
      : addContacts({ name, number: tel });
    reset();
    close();
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  return (
    <Box component="form" onSubmit={handleSubmit(handleSubmitForm)}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{
          required: "Name is required",
          minLength: {
            value: 3,
            message: "Name should be at least 3 characters",
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            autoComplete="off"
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.name}
            helperText={errors?.name?.message}
          />
        )}
      />

      <Controller
        name="tel"
        control={control}
        defaultValue=""
        rules={{
          required: "Number is required",
          pattern: {
            value:
              "+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}",
            message: "Invalid phone number",
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            autoComplete="off"
            label="Number"
            type="tel"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.tel}
            helperText={errors?.tel?.message}
          />
        )}
      />
      <DialogActions>
        <Button onClick={close}>Cancel</Button>
        <Button type="submit" variant="contained">
          Add
        </Button>
      </DialogActions>
    </Box>
  );
};
export default Form;

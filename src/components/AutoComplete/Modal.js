import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { POSTER_IMAGE_CDN } from "../../utils";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  margin: "auto",
  background: "black",
  boxShadow: 24,
  p: 4,
  outline: "none",
  border: "none",
  overflow: "scroll",
  color: "white",
  height: "110vh",
};

const modalStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
};

export default function BasicModal({ data, redirect }) {
  console.log(data);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    handleOpen();
  }, [data]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={modalStyle}>
            {data.map((el, index) => (
              <div
                key={index}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handleClose();
                  navigate(`${redirect}${el.id}`);
                }}
              >
                <img
                  style={{ height: "400px", width: "300px" }}
                  src={`${POSTER_IMAGE_CDN}${el.backdrop_path}`}
                  alt={el.title}
                />
              </div>
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
}

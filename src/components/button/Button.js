import styled from "styled-components";
import LoadingSpinner from "../loading/Loading";
import PropTypes from "prop-types";
const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0 25px;
  line-height: 1;
  color: white;
  font-weight: 600;
  font-size: 18px;
  width: 100%;
  border-radius: 8px;
  background-image: linear-gradient(to right bottom, #4a3c3c, #1043ac);
  height: ${(props) => props.height || "66px"};
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const Button = ({
  type = "button",
  onClick = () => {},
  children,
  ...props
}) => {
  const { isLoading } = props; // =props la cac thuoc tinh con lai(disabled and isLoading) chua dinh danh
  const child = !!isLoading ? <LoadingSpinner></LoadingSpinner> : children;
  return (
    <ButtonStyle type={type} onClick={onClick} {...props}>
      {child}
    </ButtonStyle>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]),
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,

  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};

export default Button;

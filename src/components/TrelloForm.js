import React from "react";
import Icon from "@material-ui/core/Icon";
import TextArea from "react-textarea-autosize";
import Card from "@material-ui/core/Card";
import styled from "styled-components";

const Container = styled.div`
  width: 280px;
  margin-bottom: 8px;
`;

const StyledCard = styled(Card)`
  min-height: 50px;
  padding: 6px 2px 6px;
`;

const StyledTextArea = styled(TextArea)`
  resize: none;
  width: 100%;
  overflow: "hidden";
  outline: none;
  border: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 8px;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  margin-right: 8px;
  cursor: "pointer";
`;

const TrelloForm = React.memo(
  ({ list, text = "", onChange, closeForm, children }) => {
    const placeholder = list
      ? "Enter list title"
      : "Enter a title for this card...";

    return (
      <Container>
        <StyledCard>
          <StyledTextArea
            placeholder={placeholder}
            autoFocus
            value={text}
            onChange={e => onChange(e)}
            onBlur={closeForm}
                />
                
        
            </StyledCard>
            <ButtonContainer>
                {children}
                <StyledIcon onMouseDown={closeForm}>close</StyledIcon>
            </ButtonContainer>
      </Container>
    );
  }
);

export default TrelloForm;

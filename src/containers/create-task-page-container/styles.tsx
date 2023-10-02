import styled from "styled-components"

export const CreateTaskPageContainer = styled.section`
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-m);
  }

  input {
    border: 1px solid var(--border-color);
    background-color: var(--dark-blue-opaque);
    color: var(--white);
    padding: var(--space-m);
    outline: none;
    width: 500px;
  }

  textarea {
    border: 1px solid var(--border-color);
    background-color: var(--dark-blue-opaque);
    color: var(--white);
    padding: var(--space-m);
    outline: none;
    width: 500px;
    height: 120px;
    resize: none;
  }
`

import IconArea from "@components/IconArea/IconArea";
import "./AddLinkBar.css";
import { useCallback, useEffect, useState } from "react";
import { getFolderNameData } from "@api/api";
import Modal from "@components/Modal/Modal";
import useModal from "hooks/useModal";
import NoListError from "@components/NoListError/NoListError";
import styled from "styled-components";
import CheckBox from "@components/CheckBox/CheckBox";
import { NO_LINK_FOUND } from "constants";

const StyledFolderList = styled.div`
  max-height: 172px;
  overflow-y: auto;
  margin: 24px 0;
`;

const StyledAddLinkButton = styled.button`
  padding: 10px 16px;
  background: var(--button-gradation);
  color: #f5f5f5;
  font-size: 1.4rem;
  font-weight: 600;
  border-radius: 8px;
`;

const AddLinkBar = () => {
  const { closeModal } = useModal();
  const [inputValue, setInputValue] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [folderName, setFolderName] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const setFolderNameData = useCallback(async () => {
    try {
      const folderList = await getFolderNameData();
      setFolderName(folderList);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }, []);

  useEffect(() => {
    setFolderNameData();
  }, [setFolderNameData]);

  const handleAddClick = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      alert("링크를 입력해 주세요.");
      return;
    }
    setIsAddModalOpen(true);
  };

  const handleCloseAllModals = (e) => {
    e.preventDefault();
    setIsAddModalOpen(false);
    closeModal();
  };

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <div className="add-link-bar">
        <IconArea
          backgroundImageUrl={`/assets/images/icons/LinkIcon.png`}
          size={`20px`}
          marginRight={`0px`}
        />
        <input
          placeholder="링크를 추가해 보세요"
          onChange={handleInputValueChange}
        />
        <StyledAddLinkButton type="button" onClick={handleAddClick}>
          추가하기
        </StyledAddLinkButton>
      </div>

      <Modal
        isOpen={isAddModalOpen}
        closeModal={handleCloseAllModals}
        modalTitle="폴더에 추가"
        modalSubTitle={inputValue}
        buttonName="추가하기"
      >
        {errorMessage ? (
          <NoListError message={errorMessage} />
        ) : folderName.length > 0 ? (
          <StyledFolderList>
            {folderName.map((folder) => {
              return (
                <CheckBox
                  key={folder.id}
                  label={folder.name}
                  count={folder.link.count}
                />
              );
            })}
          </StyledFolderList>
        ) : (
          <NoListError message={NO_LINK_FOUND} />
        )}
      </Modal>
    </>
  );
};

export default AddLinkBar;

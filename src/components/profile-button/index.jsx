import React from "react";
import * as S from "./styles";

function ProfileButton() {
    return (
        <S.ProfileButton>
            <S.Image
                src="https://avatars.githubusercontent.com/u/64376593?v=4"
                alt="Mehmet Pekcan"
            />
            <S.Content>
                <S.Text>Caner Tüysüz</S.Text>
                <S.Subtitle>Admin</S.Subtitle>
            </S.Content>
        </S.ProfileButton>
    );
}

export { ProfileButton };

import FavoriteButton from "@components/FavoriteButton/FavoriteButton";

const CardThumbnail = ({ item, isFavoriteExist, isFavoriteActive }) => {
  return (
    <div className="card-thumbnail">
      {isFavoriteExist ? (
        <FavoriteButton isFavoriteActive={isFavoriteActive} />
      ) : null}

      {item.imageSource === undefined || item.imageSource === null ? (
        <img
          className="card-thumbnail-image"
          src="/assets/images/no-image/no_image.svg"
          alt="미리보기 이미지가 없습니다."
        />
      ) : (
        <img
          className="card-thumbnail-image"
          src={item.imageSource}
          alt="이미지 미리보기"
        />
      )}
    </div>
  );
};

export default CardThumbnail;

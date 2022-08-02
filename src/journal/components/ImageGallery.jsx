import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



export const ImageGallery = ({ images = [] }) => {

  return (

      <ImageList sx={{ width: '100%', height: 500 }} variant="woven" cols={4} gap={8}>
        { images?.map((image) => (
          <ImageListItem key={image}>
            <img
              src={`${image}?w=161&fit=crop&auto=format`}
              srcSet={`${image}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt="Imagen de la nota"
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
  );
}

// shareUtils.js
import html2canvas from "html2canvas";

export const handleDownload = (cardRef) => {
  if (cardRef.current) {
    html2canvas(cardRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "card-image.png";
      link.click();
    });
  }
};

export const handleShare = async (
  cardRef,
  setSnackbarMessage,
  setSnackbarOpen
) => {
  if (cardRef.current) {
    try {
      const canvas = await html2canvas(cardRef.current);
      canvas.toBlob(async (blob) => {
        if (blob) {
          try {
            await navigator.clipboard.write([
              new ClipboardItem({ "image/png": blob }),
            ]);
            console.log("Image copied to clipboard successfully!");
          } catch (error) {
            console.error("Failed to copy image to clipboard:", error);
          }

          const file = new File([blob], "card-image.png", {
            type: "image/png",
          });
          try {
            await navigator.share({
              title: "Word of the Day",
              text: "Check out this word of the day!",
              files: [file],
            });
            setSnackbarMessage(
              "File successfully shared and copied to clipboard"
            );
            setSnackbarOpen(true);
            console.log("Shared successfully!");
          } catch (error) {
            console.error("Error sharing:", error);
          }
        } else {
          console.error("Blob creation failed");
        }
      }, "image/png");
    } catch (error) {
      console.error("Error capturing the component:", error);
    }
  }
};

const loadingComponent = document.getElementById("loadingComponent");

const showLoading = () => {
  loadingComponent.style.display = "flex";
};

const hideLoading = () => {
  loadingComponent.style.display = "none";
}

export { showLoading, hideLoading };
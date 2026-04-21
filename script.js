function scrollToSection(id){
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
  }
  
  function submitForm(e){
    e.preventDefault();
    document.getElementById('msg').innerText = 'Pesan berhasil dikirim!';
  }
  
  function openModal(src){
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modal-img').src = src;
  }
  
  function closeModal(){
    document.getElementById('modal').style.display = 'none';
  }
  
  function toggleMenu(){
    document.getElementById('nav').classList.toggle('active');
  }
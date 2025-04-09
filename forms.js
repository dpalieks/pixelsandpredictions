// Contact Form
document.getElementById('contactForm1').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.querySelector('#email1').value;
  
    const { data: existing, error: findError } = await supabase
      .from('LearnMore')
      .select('email')
      .eq('email', email);
  
    if (existing.length > 0) {
      alert('Email already exists in contact form!');
      return;
    }
  
    const { error } = await supabase
      .from('LearnMore')
      .insert([{ email }]);
  
    if (error) {
        console.error('Supabase insert error:', error);
      alert('Something went wrong!');
    } else {
      alert('Contact form submitted!');
    }
  });
  
  // Register Form
  document.getElementById('contactForm2').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.querySelector('#name2').value;
    const subject = document.querySelector('#subject2').value;
    const email = document.querySelector('#email2').value;
  
    const { data: existing, error: findError } = await supabase
      .from('Register')
      .select('email')
      .eq('email', email);
  
    if (existing.length > 0) {
      alert('Email already registered!');
      return;
    }
  
    const { error } = await supabase
      .from('Register')
      .insert([{ name, subject, email }]);
  
    if (error) {
        console.error('Supabase insert error:', error);
      alert('Something went wrong!');
    } else {
      alert('Registration successful!');
    }
  });
  
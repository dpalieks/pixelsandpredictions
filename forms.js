  document.getElementById('contactForm1').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.querySelector('#contactForm1 #email').value;

    // Check if email exists
    const { data: existing, error: findError } = await supabase
      .from('LearnMore')
      .select('email')
      .eq('email', email);

    if (existing.length > 0) {
      alert('Email already exists in contact form!');
      return;
    }

    // Insert into Supabase
    const { error } = await supabase
      .from('LearnMore')
      .insert([{ email }]);

    if (error) {
      alert('Something went wrong!');
    } else {
      alert('Contact form submitted!');
    }
  });

  document.getElementById('contactForm2').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.querySelector('#contactForm2 #name').value;
    const subject = document.querySelector('#contactForm2 #subject').value;
    const email = document.querySelector('#contactForm2 #email').value;

    // Check if email exists
    const { data: existing, error: findError } = await supabase
      .from('Register')
      .select('email')
      .eq('email', email);

    if (existing.length > 0) {
      alert('Email already registered!');
      return;
    }

    // Insert into Supabase
    const { error } = await supabase
      .from('Register')
      .insert([{ name, subject, email }]);

    if (error) {
      alert('Something went wrong!');
    } else {
      alert('Registration successful!');
    }
  });


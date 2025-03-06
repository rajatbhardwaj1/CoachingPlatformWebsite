export async function POST(req) {
    try {
      const { name, email, phone, courses, message } = await req.json();
  
      const botToken = '7874603990:AAEw4N-j2DXMq0B2uQCvD9G4EyD2edyzmmI';
      const chatId = '1129658311'; // Replace with your Telegram Chat ID
  
      const text = `📩 *New Contact Form Submission*:\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n📞 *Phone:* ${phone}\n📚 *Courses:* ${courses.join(', ') || 'None'}\n📝 *Message:* ${message}`;
  
      const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
      const response = await fetch(telegramUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'Markdown' }),
      });
  
      const data = await response.json();
      
      if (!data.ok) throw new Error('Failed to send message to Telegram');
  
      return Response.json({ success: true, message: 'Message sent successfully!' }, { status: 200 });
    } catch (error) {
      return Response.json({ success: false, error: error.message }, { status: 500 });
    }
  }
  
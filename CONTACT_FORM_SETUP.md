# Contact Form Email Setup Guide

Your contact form is now configured to send emails using **Resend** - a modern, developer-friendly email service! Here's how to set it up:

## 📧 Resend Configuration

### Step 1: Create a Resend Account

1. Go to [resend.com](https://resend.com) and sign up for a free account
2. The free tier includes 100 emails/day, 3,000 emails/month - perfect for contact forms!

### Step 2: Get Your API Key

1. In your Resend dashboard, go to [API Keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give it a name like "Contact Form"
4. Copy the API key (starts with `re_`)

### Step 3: Configure Environment Variables

1. Copy the `env.example` file to `.env`:
   ```bash
   cp env.example .env
   ```
2. Add your Resend API key:
   ```env
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

### Step 4: Set Up Your Domain (Important!)

#### For Development/Testing:

You can use Resend's test domain for development:

- Update the "from" addresses in `src/routes/contact/+page.server.ts`:

```typescript
from: 'Contact Form <onboarding@resend.dev>';
from: 'Ryan Roga <onboarding@resend.dev>';
```

#### For Production:

1. **Add your domain** in [Resend Dashboard → Domains](https://resend.com/domains)
2. **Add the DNS records** Resend provides to verify your domain
3. **Update the "from" addresses** to use your domain:

```typescript
from: 'Contact Form <contact@yourdomain.com>';
from: 'Ryan Roga <ryan@yourdomain.com>';
```

### Step 5: Test the Form

1. Start your development server:
   ```bash
   pnpm dev
   ```
2. Navigate to `/contact`
3. Fill out and submit the form
4. Check your email for the notification and auto-reply

## 🔧 How It Works

### What Happens When Someone Submits the Form:

1. **Form Validation**: Server validates all required fields and email format
2. **Email to You**: You receive a notification email with the submission details
3. **Auto-Reply**: The sender receives an automatic thank you email
4. **Success Message**: User sees a success message on the page

### Email Templates:

- **Notification Email**: Contains all form data formatted nicely
- **Auto-Reply**: Professional thank you message with your branding

## 🛠️ Customization

### Change Recipient Email:

In `src/routes/contact/+page.server.ts`, line 34:

```typescript
to: ['ryan@roga.dev'], // Change this to your email
```

### Change From Addresses:

Update both email sends in the same file:

```typescript
// Notification email
from: 'Contact Form <contact@yourdomain.com>';

// Auto-reply email
from: 'Your Name <your@yourdomain.com>';
```

### Customize Email Templates:

Edit the HTML and text content in the `resend.emails.send()` calls.

### Add More Form Fields:

1. Add the field to the form in `+page.svelte`
2. Extract the field data in `+page.server.ts`
3. Include it in the email templates

## 🚨 Troubleshooting

### Common Issues:

1. **"Unauthorized" or API errors**

   - Double-check your API key is correct and starts with `re_`
   - Make sure the API key is properly set in your `.env` file

2. **"Domain not verified" errors**

   - For development: use `onboarding@resend.dev` as the from address
   - For production: verify your domain in the Resend dashboard

3. **Emails not received**

   - Check spam/junk folders
   - Verify the recipient email address
   - Check Resend dashboard logs for delivery status

4. **Form not submitting**
   - Check browser console for JavaScript errors
   - Verify the server action is properly set up
   - Ensure all required fields are filled

### Debug Mode:

Add this to your server action for debugging:

```typescript
console.log('Form data:', { name, email, project, message });
console.log('Resend API key present:', !!process.env.RESEND_API_KEY);
```

## 📈 Production Deployment

### Environment Variables:

Make sure to set this environment variable in your hosting platform:

- `RESEND_API_KEY`

### Domain Setup:

1. **Verify your domain** in Resend dashboard
2. **Update from addresses** to use your verified domain
3. **Test thoroughly** before going live

## 🎯 Resend Benefits

✅ **Simple setup** - just one API key needed  
✅ **Reliable delivery** - built for developers  
✅ **Great dashboard** - see all email activity  
✅ **Generous free tier** - 100 emails/day  
✅ **No SMTP complexity** - modern REST API  
✅ **Built-in analytics** - track opens, clicks, etc.

## 📊 Monitoring

You can monitor all email activity in your [Resend Dashboard](https://resend.com/emails):

- See delivery status
- Track opens and clicks
- View bounce/spam reports
- Debug any issues

Your contact form is now ready to receive and forward inquiries! 🎉

## 🔗 Useful Links

- [Resend Documentation](https://resend.com/docs)
- [Resend Dashboard](https://resend.com/emails)
- [Domain Verification Guide](https://resend.com/docs/dashboard/domains/introduction)

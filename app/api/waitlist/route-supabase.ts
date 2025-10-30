import { NextRequest, NextResponse } from 'next/server';
// import { supabase, WaitlistEntry } from '@/lib/supabase';

interface WaitlistRequest {
  email: string;
  reason?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: WaitlistRequest = await request.json();
    const { email, reason } = body;

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Validate reason
    const validReasons = ['traveler', 'investor', 'diaspora', 'returning', 'business', 'local', 'other'];
    if (reason && !validReasons.includes(reason)) {
      return NextResponse.json(
        { error: 'Invalid reason provided' },
        { status: 400 }
      );
    }

    // TODO: Uncomment when Supabase is set up
    /*
    // Check if email already exists
    const { data: existingUser, error: checkError } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', email)
      .single();

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered for waitlist' },
        { status: 409 }
      );
    }

    // Insert new waitlist entry
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        {
          email: email,
          reason: reason || 'other',
          metadata: {
            user_agent: request.headers.get('user-agent'),
            ip_address: request.ip || request.headers.get('x-forwarded-for'),
            signup_timestamp: new Date().toISOString()
          }
        }
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save to waitlist' },
        { status: 500 }
      );
    }

    console.log('New waitlist signup saved:', data);
    */

    // Temporary logging until Supabase is set up
    console.log('New waitlist signup:', { email, reason: reason || 'Not specified' });
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Here you would typically also:
    // 1. Send welcome email (e.g., using Resend, SendGrid, etc.)
    // 2. Add to email marketing list (e.g., Mailchimp, ConvertKit)
    // 3. Trigger notifications (e.g., Slack, Discord)

    return NextResponse.json(
      { 
        message: 'Successfully joined the waitlist!',
        email: email,
        reason: reason || 'Not specified'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve waitlist statistics (admin only)
export async function GET(request: NextRequest) {
  try {
    // TODO: Add authentication check here
    
    // TODO: Uncomment when Supabase is set up
    /*
    // Get total count
    const { count: totalCount, error: countError } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true })
      .eq('is_active', true);

    if (countError) {
      console.error('Error getting count:', countError);
      return NextResponse.json({ error: 'Failed to get statistics' }, { status: 500 });
    }

    // Get count by reason
    const { data: reasonStats, error: reasonError } = await supabase
      .from('waitlist')
      .select('reason')
      .eq('is_active', true);

    if (reasonError) {
      console.error('Error getting reason stats:', reasonError);
      return NextResponse.json({ error: 'Failed to get statistics' }, { status: 500 });
    }

    // Process reason statistics
    const reasonCounts = reasonStats.reduce((acc, entry) => {
      acc[entry.reason] = (acc[entry.reason] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return NextResponse.json({
      total_signups: totalCount,
      reason_breakdown: reasonCounts,
      last_updated: new Date().toISOString()
    });
    */

    // Temporary response until Supabase is set up
    return NextResponse.json({
      total_signups: 217,
      reason_breakdown: {
        traveler: 65,
        investor: 48,
        diaspora: 42,
        returning: 31,
        business: 18,
        local: 8,
        other: 5
      },
      last_updated: new Date().toISOString()
    });

  } catch (error) {
    console.error('Waitlist GET API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

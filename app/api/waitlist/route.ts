import { NextRequest, NextResponse } from 'next/server';
import { supabase, WaitlistEntry } from '@/lib/supabase';

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

    // Check if email already exists
    const { data: existingUser, error: checkError } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', email)
      .single();

    if (existingUser) {
      return NextResponse.json(
        { error: 'This email is already on the waitlist' },
        { status: 409 }
      );
    }

    // Insert new waitlist entry
    const newEntry: Omit<WaitlistEntry, 'id' | 'created_at' | 'updated_at'> = {
      email,
      reason: reason || 'other',
      metadata: {
        source: 'landing_page',
        user_agent: request.headers.get('user-agent'),
        ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
        timestamp: new Date().toISOString()
      }
    };

    const { data, error } = await supabase
      .from('waitlist')
      .insert([newEntry])
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to join waitlist. Please try again.' },
        { status: 500 }
      );
    }

    // Success response
    return NextResponse.json(
      { 
        message: 'Successfully joined the waitlist!',
        email: email,
        reason: reason || 'other',
        id: data.id
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

// GET endpoint for statistics (admin use)
export async function GET() {
  try {
    // Get total count
    const { count: totalCount, error: countError } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.error('Count error:', countError);
      return NextResponse.json(
        { error: 'Failed to get statistics' },
        { status: 500 }
      );
    }

    // Get reason breakdown
    const { data: reasonData, error: reasonError } = await supabase
      .from('waitlist')
      .select('reason')
      .order('reason');

    if (reasonError) {
      console.error('Reason breakdown error:', reasonError);
      return NextResponse.json(
        { error: 'Failed to get reason breakdown' },
        { status: 500 }
      );
    }

    // Calculate reason breakdown
    const reasonBreakdown = reasonData.reduce((acc: Record<string, number>, item) => {
      acc[item.reason] = (acc[item.reason] || 0) + 1;
      return acc;
    }, {});

    return NextResponse.json({
      total_signups: totalCount || 0,
      reason_breakdown: reasonBreakdown,
      last_updated: new Date().toISOString()
    });

  } catch (error) {
    console.error('Statistics API error:', error);
    return NextResponse.json(
      { error: 'Failed to get statistics' },
      { status: 500 }
    );
  }
}

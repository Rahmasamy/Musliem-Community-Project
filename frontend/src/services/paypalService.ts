// services/paypalService.ts
import axios from 'axios';

class PayPalService {
  private baseUrl: string;
  private clientId: string;
  private clientSecret: string;
  private accessToken: string | null = null;

  constructor() {
    this.baseUrl = process.env.PAYPAL_ENVIRONMENT === 'live' 
      ? 'https://api-m.paypal.com' 
      : 'https://api-m.sandbox.paypal.com';
    this.clientId = process.env.PAYPAL_CLIENT_ID!;
    this.clientSecret = process.env.PAYPAL_CLIENT_SECRET!;
  }

  async getAccessToken(): Promise<string> {
    if (this.accessToken) return this.accessToken as string;

    const auth = Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64');
    
    const response = await axios.post(`${this.baseUrl}/v1/oauth2/token`, 
      'grant_type=client_credentials',
      {
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    this.accessToken = response.data.access_token;
    return this.accessToken as string;
  }

  async createBillingPlan(planData: any) {
    const token = await this.getAccessToken();
    
    const response = await axios.post(`${this.baseUrl}/v1/billing/plans`, planData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  }

  async createSubscription(subscriptionData: any) {
    const token = await this.getAccessToken();
    
    const response = await axios.post(`${this.baseUrl}/v1/billing/subscriptions`, subscriptionData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  }

  async getSubscription(subscriptionId: string) {
    const token = await this.getAccessToken();
    
    const response = await axios.get(`${this.baseUrl}/v1/billing/subscriptions/${subscriptionId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  }

  async cancelSubscription(subscriptionId: string, reason: string) {
    const token = await this.getAccessToken();
    
    const response = await axios.post(
      `${this.baseUrl}/v1/billing/subscriptions/${subscriptionId}/cancel`,
      { reason },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.status === 204;
  }
}

export default new PayPalService();
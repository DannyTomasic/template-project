class API {
  url = window.location.hostname === 'localhost'
    ? '//localhost:3000/api/v1'
    : '//boomtown-api-straging.herokuapp.com/api/v1';

  token = process.env.API_TOKEN;

  request (method: 'GET' | 'POST' | 'PUT' | 'DELETE') {
    return async <T>(path: string, body?: any) => {
      const res = await fetch(`${this.url}/${path}`, {
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: ['POST', 'PUT'].includes(method)
          ? JSON.stringify(body)
          : undefined,
        method,
      });

      try {
        if (!res.ok) {
          if (res.status === 401) {
            // this.logout();
          }

          throw null;
        }

        const data: T = await res.json();

        return {
          status: res.status,
          ok: true as true,
          data,
        };
      } catch {
        return {
          status: res.status,
          ok: false as false,
          data: null,
        };
      }
    };
  };

  delete = this.request('DELETE');
  post = this.request('POST');
  get = this.request('GET');
  put = this.request('PUT');
}

export default new API();

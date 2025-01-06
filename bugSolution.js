This solution uses optional chaining (?.) and nullish coalescing (??).

```javascript
// bugSolution.js
import React, { useState, useEffect } from 'react';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      // Simulate fetching user data
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUser({ name: 'John Doe', email: 'john.doe@example.com' });
    };
    fetchUser();
  }, []);

  return (
    <div>
      <h1>User Name: {user?.name ?? 'Loading...'}</h1>
      <h1>User Email: {user?.email ?? 'Loading...'}</h1>
    </div>
  );
};

export default App;
```

The `user?.name` uses optional chaining to safely access the name property only if `user` is defined. The `?? 'Loading...'` part provides a fallback value if the user object or its 'name' property is nullish.
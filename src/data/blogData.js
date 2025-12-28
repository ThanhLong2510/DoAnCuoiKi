export const blogPosts = [
  {
    id: 1,
    title: 'Java Spring Boot Security: Xây dựng hệ thống xác thực JWT',
    description: 'Hướng dẫn chi tiết cách triển khai JWT Authentication trong Spring Boot, bảo mật API endpoints và quản lý phiên đăng nhập an toàn.',
    tags: ['Java', 'Security'],
    date: '2024-12-15',
    readTime: '12 phút',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    sections: [
      {
        title: 'Giới thiệu về JWT Authentication',
        content: 'JSON Web Token (JWT) là một tiêu chuẩn mở (RFC 7519) định nghĩa cách truyền thông tin an toàn giữa các bên dưới dạng JSON object. JWT thường được sử dụng để xác thực và ủy quyền trong các ứng dụng web hiện đại.',
      },
      {
        title: 'Cấu trúc của JWT',
        content: 'JWT bao gồm 3 phần chính: Header chứa loại token và thuật toán mã hóa, Payload chứa các claims (thông tin về user), và Signature là chữ ký để xác minh token.',
        list: [
          'Header: Chứa loại token và thuật toán mã hóa (HS256, RS256)',
          'Payload: Chứa các claims như user ID, roles, expiration time',
          'Signature: Được tạo bằng cách mã hóa header + payload với secret key'
        ]
      },
      {
        title: 'Triển khai JWT Utility Class',
        content: 'Đầu tiên, chúng ta cần tạo một utility class để generate và validate JWT tokens.',
        code: `@Component
public class JwtUtil {
    private String secret = "mySecretKey";
    
    public String generateToken(String username) {
        return Jwts.builder()
            .setSubject(username)
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
            .signWith(SignatureAlgorithm.HS256, secret)
            .compact();
    }
    
    public Boolean validateToken(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }
}`,
        language: 'Java'
      },
      {
        title: 'Best Practices',
        list: [
          'Sử dụng HTTPS để truyền token an toàn',
          'Đặt thời gian hết hạn ngắn cho access token (15-30 phút)',
          'Implement refresh token mechanism để cải thiện UX',
          'Lưu trữ secret key trong environment variables',
          'Không lưu sensitive data trong JWT payload'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'JavaScript và XSS: Cách phòng chống tấn công Cross-Site Scripting',
    description: 'Tìm hiểu về các loại tấn công XSS phổ biến và cách bảo vệ ứng dụng JavaScript khỏi các lỗ hổng bảo mật nguy hiểm này.',
    tags: ['JavaScript', 'Security'],
    date: '2024-12-10',
    readTime: '10 phút',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop',
    sections: [
      {
        title: 'XSS là gì?',
        content: 'Cross-Site Scripting (XSS) là một lỗ hổng bảo mật cho phép attacker inject mã JavaScript độc hại vào trang web, từ đó đánh cắp thông tin người dùng như cookies, session tokens.',
      },
      {
        title: 'Cơ chế hoạt động của tấn công XSS',
        content: 'Tấn công Cross-site scripting hoạt động bằng cách thao túng một trang web tồn tại lỗ hổng để nó trả về mã JavaScript độc hại cho người dùng. Khi mã độc được thực thi trong trình duyệt của nạn nhân, attacker có thể hoàn toàn xâm phạm tương tác trực tiếp với ứng dụng. Attacker có thể đánh cắp các thông tin nhạy cảm như: Password, Wire transfer, Sensitive data, Mother\'s maiden name và nhiều dữ liệu quan trọng khác.',
        image: '/XSS.png'
      },
      {
        title: 'Các loại XSS',
        list: [
          'Stored XSS: Mã độc được lưu trữ trên server và hiển thị cho tất cả người dùng',
          'Reflected XSS: Mã độc được phản hồi từ server thông qua URL parameters',
          'DOM-based XSS: Mã độc được thực thi trực tiếp trong DOM mà không qua server'
        ]
      },
      {
        title: 'Escape Output Function',
        content: 'Một trong những cách phòng chống XSS hiệu quả nhất là escape tất cả output trước khi render.',
        code: `function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Sử dụng
const userInput = '<script>alert("XSS")</script>';
const safeOutput = escapeHtml(userInput);
// Output: &lt;script&gt;alert("XSS")&lt;/script&gt;`,
        language: 'JavaScript'
      },
      {
        title: 'Content Security Policy',
        content: 'CSP là một layer bảo mật bổ sung giúp phát hiện và ngăn chặn các cuộc tấn công XSS.',
        code: `<!-- Trong HTML head -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self' 'unsafe-inline'">

// Hoặc trong HTTP header
Content-Security-Policy: default-src 'self'; script-src 'self'`,
        language: 'HTML'
      }
    ]
  },
  {
    id: 3,
    title: 'Xây dựng REST API với Java và kết nối Database',
    description: 'Từ cơ bản đến nâng cao: Tạo RESTful API với Spring Boot, kết nối MySQL/PostgreSQL và tối ưu hiệu suất truy vấn.',
    tags: ['Java', 'Network'],
    date: '2024-11-28',
    readTime: '15 phút',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    sections: [
      {
        title: 'REST API là gì?',
        content: 'REST (Representational State Transfer) là một kiến trúc thiết kế API sử dụng HTTP methods để thao tác với resources. RESTful API tuân theo các nguyên tắc của REST.',
        list: [
          'GET: Lấy dữ liệu từ server',
          'POST: Tạo mới resource',
          'PUT: Cập nhật toàn bộ resource',
          'PATCH: Cập nhật một phần resource',
          'DELETE: Xóa resource'
        ]
      },
      {
        title: 'Entity Class với JPA',
        content: 'Định nghĩa entity class để map với database table.',
        code: `@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, length = 100)
    private String name;
    
    @Column(unique = true)
    private String email;
    
    @CreatedDate
    private LocalDateTime createdAt;
    
    // Getters and Setters
}`,
        language: 'Java'
      },
      {
        title: 'REST Controller',
        content: 'Tạo controller để handle HTTP requests.',
        code: `@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserRepository userRepository;
    
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userRepository.findAll());
    }
    
    @PostMapping
    public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
        User savedUser = userRepository.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
}`,
        language: 'Java'
      }
    ]
  },
  {
    id: 4,
    title: 'Node.js Networking: Xây dựng ứng dụng Real-time với Socket.io',
    description: 'Hướng dẫn tạo ứng dụng chat real-time, notification system và live updates sử dụng Socket.io trong Node.js.',
    tags: ['JavaScript', 'Network'],
    date: '2024-11-20',
    readTime: '14 phút',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    sections: [
      {
        title: 'Socket.io là gì?',
        content: 'Socket.io là một thư viện JavaScript cho phép giao tiếp real-time, bi-directional giữa client và server thông qua WebSocket với fallback mechanisms.',
      },
      {
        title: 'Server Setup',
        content: 'Cài đặt và cấu hình Socket.io server với Express.',
        code: `const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    console.log('User connected:', socket.id);
    
    // Lắng nghe event từ client
    socket.on('chat message', (msg) => {
        // Broadcast đến tất cả clients
        io.emit('chat message', {
            id: socket.id,
            message: msg,
            timestamp: new Date()
        });
    });
    
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});`,
        language: 'JavaScript'
      },
      {
        title: 'Client Setup',
        content: 'Kết nối từ client và gửi/nhận messages.',
        code: `import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

// Kết nối thành công
socket.on('connect', () => {
    console.log('Connected to server');
});

// Gửi message
function sendMessage(message) {
    socket.emit('chat message', message);
}

// Nhận message
socket.on('chat message', (data) => {
    console.log('New message:', data);
    displayMessage(data);
});`,
        language: 'JavaScript'
      }
    ]
  },
  {
    id: 5,
    title: 'Machine Learning với JavaScript: TensorFlow.js cho người mới bắt đầu',
    description: 'Khám phá cách sử dụng TensorFlow.js để xây dựng và triển khai mô hình AI trực tiếp trên trình duyệt web.',
    tags: ['JavaScript', 'AI'],
    date: '2024-11-15',
    readTime: '18 phút',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    sections: [
      {
        title: 'TensorFlow.js là gì?',
        content: 'TensorFlow.js là một thư viện JavaScript cho phép train và deploy machine learning models trực tiếp trên browser hoặc Node.js mà không cần backend Python.',
      },
      {
        title: 'Tạo Model Neural Network',
        content: 'Xây dựng một neural network đơn giản với TensorFlow.js.',
        code: `import * as tf from '@tensorflow/tfjs';

// Tạo model sequential
const model = tf.sequential();

// Input layer + Hidden layer
model.add(tf.layers.dense({
    units: 16,
    activation: 'relu',
    inputShape: [4]
}));

// Hidden layer
model.add(tf.layers.dense({
    units: 8,
    activation: 'relu'
}));

// Output layer
model.add(tf.layers.dense({
    units: 3,
    activation: 'softmax'
}));

// Compile model
model.compile({
    optimizer: tf.train.adam(0.01),
    loss: 'categoricalCrossentropy',
    metrics: ['accuracy']
});`,
        language: 'JavaScript'
      },
      {
        title: 'Training và Prediction',
        content: 'Train model với data và thực hiện prediction.',
        code: `// Chuẩn bị training data
const xs = tf.tensor2d([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]);

const ys = tf.tensor2d([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
]);

// Train model
async function trainModel() {
    await model.fit(xs, ys, {
        epochs: 100,
        batchSize: 32,
        callbacks: {
            onEpochEnd: (epoch, logs) => {
                console.log(\`Epoch \${epoch}: loss = \${logs.loss.toFixed(4)}\`);
            }
        }
    });
    
    // Prediction
    const input = tf.tensor2d([[2, 3, 4, 5]]);
    const prediction = model.predict(input);
    prediction.print();
}

trainModel();`,
        language: 'JavaScript'
      }
    ]
  },
  {
    id: 6,
    title: 'Java Multithreading: Xử lý đồng thời và Network Programming',
    description: 'Tìm hiểu về Thread, ExecutorService và cách xây dựng server đa luồng xử lý nhiều kết nối đồng thời trong Java.',
    tags: ['Java', 'Network'],
    date: '2024-11-08',
    readTime: '16 phút',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=400&fit=crop',
    sections: [
      {
        title: 'Multithreading trong Java',
        content: 'Multithreading cho phép chương trình thực hiện nhiều tác vụ đồng thời, tăng hiệu suất và khả năng phản hồi của ứng dụng.',
      },
      {
        title: 'ExecutorService',
        content: 'Sử dụng ExecutorService để quản lý thread pool hiệu quả.',
        code: `import java.util.concurrent.*;

public class ThreadPoolExample {
    public static void main(String[] args) {
        // Tạo thread pool với 10 threads
        ExecutorService executor = Executors.newFixedThreadPool(10);
        
        // Submit tasks
        for (int i = 0; i < 100; i++) {
            final int taskId = i;
            executor.submit(() -> {
                System.out.println("Task " + taskId + 
                    " executed by " + Thread.currentThread().getName());
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            });
        }
        
        // Shutdown executor
        executor.shutdown();
        try {
            executor.awaitTermination(60, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            executor.shutdownNow();
        }
    }
}`,
        language: 'Java'
      },
      {
        title: 'Multi-threaded Server',
        content: 'Xây dựng server có thể xử lý nhiều client connections đồng thời.',
        code: `public class MultiThreadedServer {
    private static final int PORT = 8080;
    
    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(PORT);
        ExecutorService pool = Executors.newCachedThreadPool();
        
        System.out.println("Server started on port " + PORT);
        
        while (true) {
            Socket clientSocket = serverSocket.accept();
            pool.execute(new ClientHandler(clientSocket));
        }
    }
}

class ClientHandler implements Runnable {
    private Socket socket;
    
    public ClientHandler(Socket socket) {
        this.socket = socket;
    }
    
    @Override
    public void run() {
        try (BufferedReader in = new BufferedReader(
                new InputStreamReader(socket.getInputStream()));
             PrintWriter out = new PrintWriter(
                socket.getOutputStream(), true)) {
            
            String request;
            while ((request = in.readLine()) != null) {
                System.out.println("Received: " + request);
                out.println("Echo: " + request);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`,
        language: 'Java'
      }
    ]
  },
  {
    id: 7,
    title: 'Bảo mật ứng dụng Java: OWASP Top 10 và cách phòng tránh',
    description: 'Phân tích 10 lỗ hổng bảo mật phổ biến nhất theo OWASP và hướng dẫn cách khắc phục trong ứng dụng Java.',
    tags: ['Java', 'Security'],
    date: '2024-10-25',
    readTime: '20 phút',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop',
    sections: [
      {
        title: 'OWASP Top 10 - 2021',
        content: 'OWASP (Open Web Application Security Project) công bố danh sách 10 lỗ hổng bảo mật phổ biến nhất trong ứng dụng web.',
        list: [
          'A01: Broken Access Control',
          'A02: Cryptographic Failures',
          'A03: Injection',
          'A04: Insecure Design',
          'A05: Security Misconfiguration'
        ]
      },
      {
        title: 'Phòng chống SQL Injection',
        content: 'Sử dụng PreparedStatement thay vì String concatenation.',
        code: `// ❌ KHÔNG AN TOÀN - Dễ bị SQL Injection
String query = "SELECT * FROM users WHERE id = " + userId;
Statement stmt = conn.createStatement();
ResultSet rs = stmt.executeQuery(query);

// ✅ AN TOÀN - Sử dụng PreparedStatement
String query = "SELECT * FROM users WHERE id = ?";
PreparedStatement pstmt = conn.prepareStatement(query);
pstmt.setInt(1, userId);
ResultSet rs = pstmt.executeQuery();`,
        language: 'Java'
      },
      {
        title: 'Password Hashing với BCrypt',
        content: 'Không bao giờ lưu password dạng plain text. Sử dụng BCrypt để hash.',
        code: `import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordService {
    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);
    
    // Hash password trước khi lưu
    public String hashPassword(String plainPassword) {
        return encoder.encode(plainPassword);
    }
    
    // Verify password khi login
    public boolean verifyPassword(String plainPassword, String hashedPassword) {
        return encoder.matches(plainPassword, hashedPassword);
    }
}`,
        language: 'Java'
      }
    ]
  },
  {
    id: 8,
    title: 'AI Chatbot với JavaScript: Tích hợp OpenAI API',
    description: 'Xây dựng chatbot thông minh sử dụng OpenAI GPT API, xử lý ngôn ngữ tự nhiên và triển khai trên web application.',
    tags: ['JavaScript', 'AI'],
    date: '2024-10-18',
    readTime: '13 phút',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=400&fit=crop',
    sections: [
      {
        title: 'Giới thiệu OpenAI API',
        content: 'OpenAI cung cấp API cho phép tích hợp các mô hình AI như GPT-4 vào ứng dụng của bạn, giúp xây dựng chatbot thông minh với khả năng hiểu ngôn ngữ tự nhiên.',
      },
      {
        title: 'Cấu hình OpenAI Client',
        content: 'Cài đặt và cấu hình OpenAI SDK.',
        code: `import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function chat(userMessage, conversationHistory = []) {
    const messages = [
        {
            role: "system",
            content: "Bạn là một trợ lý AI thông minh, thân thiện và hữu ích. Trả lời bằng tiếng Việt."
        },
        ...conversationHistory,
        {
            role: "user",
            content: userMessage
        }
    ];
    
    const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: messages,
        max_tokens: 1000,
        temperature: 0.7
    });
    
    return completion.choices[0].message.content;
}`,
        language: 'JavaScript'
      },
      {
        title: 'React Chatbot Component',
        content: 'Xây dựng UI chatbot với React.',
        code: `import { useState } from 'react';

function ChatBot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    
    const sendMessage = async () => {
        if (!input.trim()) return;
        
        const userMsg = { role: 'user', content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setLoading(true);
        
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input })
            });
            const data = await response.json();
            
            const botMsg = { role: 'assistant', content: data.reply };
            setMessages(prev => [...prev, botMsg]);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="chatbot">
            <div className="messages">
                {messages.map((msg, i) => (
                    <div key={i} className={msg.role}>
                        {msg.content}
                    </div>
                ))}
            </div>
            <input 
                value={input} 
                onChange={e => setInput(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && sendMessage()}
                placeholder="Nhập tin nhắn..."
            />
            <button onClick={sendMessage} disabled={loading}>
                {loading ? 'Đang xử lý...' : 'Gửi'}
            </button>
        </div>
    );
}`,
        language: 'JavaScript'
      }
    ]
  },
  {
    id: 9,
    title: 'Java Cryptography: Mã hóa dữ liệu và chữ ký số',
    description: 'Hướng dẫn sử dụng Java Cryptography Architecture (JCA) để mã hóa AES, RSA và tạo chữ ký số bảo mật.',
    tags: ['Java', 'Security'],
    date: '2024-10-10',
    readTime: '17 phút',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=400&fit=crop',
    sections: [
      {
        title: 'Java Cryptography Architecture (JCA)',
        content: 'JCA cung cấp framework cho việc mã hóa, giải mã, tạo chữ ký số và quản lý khóa trong Java. Đây là nền tảng bảo mật quan trọng cho mọi ứng dụng Java.',
      },
      {
        title: 'Mã hóa đối xứng - AES',
        content: 'AES (Advanced Encryption Standard) là thuật toán mã hóa đối xứng phổ biến nhất.',
        code: `import javax.crypto.*;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;

public class AESEncryption {
    private static final String ALGORITHM = "AES";
    
    // Generate random key
    public static SecretKey generateKey() throws Exception {
        KeyGenerator keyGen = KeyGenerator.getInstance(ALGORITHM);
        keyGen.init(256); // AES-256
        return keyGen.generateKey();
    }
    
    // Encrypt
    public static String encrypt(String data, SecretKey key) throws Exception {
        Cipher cipher = Cipher.getInstance(ALGORITHM);
        cipher.init(Cipher.ENCRYPT_MODE, key);
        byte[] encrypted = cipher.doFinal(data.getBytes("UTF-8"));
        return Base64.getEncoder().encodeToString(encrypted);
    }
    
    // Decrypt
    public static String decrypt(String encryptedData, SecretKey key) throws Exception {
        Cipher cipher = Cipher.getInstance(ALGORITHM);
        cipher.init(Cipher.DECRYPT_MODE, key);
        byte[] decoded = Base64.getDecoder().decode(encryptedData);
        return new String(cipher.doFinal(decoded), "UTF-8");
    }
}`,
        language: 'Java'
      },
      {
        title: 'Chữ ký số với RSA',
        content: 'Chữ ký số đảm bảo tính toàn vẹn và xác thực nguồn gốc của dữ liệu.',
        code: `import java.security.*;

public class DigitalSignature {
    
    // Generate RSA key pair
    public static KeyPair generateKeyPair() throws Exception {
        KeyPairGenerator keyGen = KeyPairGenerator.getInstance("RSA");
        keyGen.initialize(2048);
        return keyGen.generateKeyPair();
    }
    
    // Sign data
    public static byte[] sign(String data, PrivateKey privateKey) throws Exception {
        Signature signature = Signature.getInstance("SHA256withRSA");
        signature.initSign(privateKey);
        signature.update(data.getBytes("UTF-8"));
        return signature.sign();
    }
    
    // Verify signature
    public static boolean verify(String data, byte[] signatureBytes, 
                                  PublicKey publicKey) throws Exception {
        Signature signature = Signature.getInstance("SHA256withRSA");
        signature.initVerify(publicKey);
        signature.update(data.getBytes("UTF-8"));
        return signature.verify(signatureBytes);
    }
}`,
        language: 'Java'
      },
      {
        title: 'Best Practices',
        list: [
          'Không tự implement crypto algorithms - sử dụng thư viện đã được kiểm chứng',
          'Sử dụng SecureRandom cho key generation',
          'Lưu trữ keys an toàn trong KeyStore',
          'Rotate keys định kỳ',
          'Sử dụng key length phù hợp (AES-256, RSA-2048+)'
        ]
      }
    ]
  },
]

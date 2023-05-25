import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    JoinColumn,
    ManyToOne
} from 'typeorm';
import User from './User.js';

@Entity('expenses')
class Expense extends BaseEntity {

    constructor(
        id: number,
        user: User,
        amount: number,
        label: string,
        created_at: Date
    ) {
        super();
        this.id = id;
        this.user = user;
        this.amount = amount;
        this.label = label;
        this.created_at = created_at;
    };

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(
        () => User,
        (user: User) => user.expenses,
        { onDelete: "CASCADE" }
    )
    @JoinColumn({ name: "user_id" })
    user: User;

    @Column({ type: "int" })
    amount: number;

    @Column({ type: "varchar", length: 255 })
    label: string;

    @CreateDateColumn()
    created_at: Date;
};

export default Expense;